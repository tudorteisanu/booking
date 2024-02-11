import { ChangeDetectionStrategy, Component, computed, EventEmitter, Output, signal } from '@angular/core';
import dayjs, { Dayjs } from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import isToday from 'dayjs/plugin/isToday';
import { DecimalPipe, NgClass, NgOptimizedImage } from '@angular/common';

dayjs.extend(localeData);
dayjs.extend(isToday);

dayjs().localeData();

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    NgClass,
    NgOptimizedImage,
    DecimalPipe,
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent {
  @Output() selectDate = new EventEmitter();
  currentDate = signal(dayjs());
  selectedDate = signal<Dayjs | null>(null);

  days = computed<Dayjs[]>(() => {
    return [...new Array(this.currentDate().daysInMonth())]
      .map((_, index) => this.currentDate().set('date', index + 1));

  });
  prependDays = computed(() => {
    const [firstDay] = this.days();

    if (firstDay.day() !== 1) {
      const lastMonth = dayjs(this.currentDate().toISOString()).set('month', this.currentDate().month() - 1);
      const arrayLength = firstDay.day() ? firstDay.day() - 1 : 6;

      return [...new Array(arrayLength)]
        .map((_, index) => lastMonth.daysInMonth() - index)
        .reverse();
    }

    return [];
  })
  appendDays = computed(() => {
    const lastDay = this.days()[this.days().length - 1];

    if (lastDay.day() !== 0) {
      return [...new Array(6 - lastDay.day() + 1)]
        .map((_, index) => `0${index + 1}`)
    }

    return [];
  })

  setDate(date: Dayjs): void {
    this.selectedDate.set(date);
    this.selectDate.emit(this.selectedDate());
  }

  changeMonth(value: number) {
    if ((this.currentDate().month() + value) > 11) {
      this.currentDate.update(newDate => newDate.set('month', 0).set('year', this.currentDate().year() + value));
      return;
    }
    this.currentDate.update(newDate => newDate.set('month', newDate.month() + value));
  }

  getDayClass(day: Dayjs): Record<string, boolean | undefined> {
    return {
      'bg-light-green text-white ': this.selectedDate()?.isSame(day),
      'border border-info': day.isToday()
    }
  }
}
