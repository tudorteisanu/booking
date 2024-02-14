import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
  count = input<number>(0);
  maxCount = input<number>(50);
  @Output() countChange = new EventEmitter();

  setCount(value: number): void {
    if (this.count() + value < 0 || this.count() + value > this.maxCount()) {
      return;
    }

    this.countChange.emit(this.count() + value);
  }
}
