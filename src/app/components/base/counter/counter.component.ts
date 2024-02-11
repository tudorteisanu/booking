import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-counter',
    standalone: true,
    imports: [],
    templateUrl: './counter.component.html',
    styleUrl: './counter.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {
  @Input() count: number = 0;
  @Input() maxCount: number = 50;
  @Output() countChange = new EventEmitter();

  setCount(value: number): void {
      if (this.count + value < 0 || this.count+value > this.maxCount) {
          return;
      }

      this.countChange.emit(this.count+value);
  }
}
