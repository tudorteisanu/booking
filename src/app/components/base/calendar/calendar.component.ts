import {ChangeDetectionStrategy, Component, computed, EventEmitter, Output, signal} from '@angular/core';
import dayjs, {Dayjs} from "dayjs";
import localeData from 'dayjs/plugin/localeData';
import isToday from 'dayjs/plugin/isToday';
import {NgClass, NgOptimizedImage} from "@angular/common";

dayjs.extend(localeData)
dayjs.extend(isToday)

dayjs().localeData()

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    NgClass,
    NgOptimizedImage
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
    const days = [...new Array(this.currentDate().daysInMonth())]
      .map((_, index) => this.currentDate().set("date", index + 1))

    const [firstDay] = days;
    const lastDay = days[days.length - 1];

    if(firstDay.day() !== 1) {
      const lastMonth = dayjs(this.currentDate().toISOString()).set('month', this.currentDate().month() - 1);
      const arrayLength = firstDay.day() ? firstDay.day() - 1 : 6;
      const lastMonthDays = [...new Array(arrayLength)]
        .map((_, index) => lastMonth.set("date", lastMonth.daysInMonth() - index ))
        .reverse()

      days.unshift(...lastMonthDays)
    }

    if (lastDay.day() !== 0) {
      const nextMonth = dayjs(this.currentDate().toISOString()).set('month', this.currentDate().month() + 1);

      const lastMonthDays = [...new Array(6 - lastDay.day() + 1)]
        .map((_, index) => nextMonth.set("date", index + 1))

      days.push(...lastMonthDays)
    }

    return days
  })

  setDate(date: Dayjs): void {
    this.selectedDate.set(date);
    this.selectDate.emit(this.selectedDate())
  }

  changeMonth(value: number) {
    if ((this.currentDate().month() + value) > 11) {
      this.currentDate.update(newDate => newDate.set('month', 0).set('year', this.currentDate().year() + value));
      return
    }
    this.currentDate.update(newDate => newDate.set('month', newDate.month() + value));
  }
}
