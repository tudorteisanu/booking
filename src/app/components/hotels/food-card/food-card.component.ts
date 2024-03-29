import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  input,
  Output,
} from '@angular/core';
import { BasketInterface } from '@/types';
import { CounterComponent } from '@/components/base/counter/counter.component';

@Component({
  selector: 'app-food-card',
  standalone: true,
  imports: [CounterComponent],
  templateUrl: './food-card.component.html',
  styleUrl: './food-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoodCardComponent {
  food = input.required<BasketInterface>();
  @Output() updateCount = new EventEmitter();

  updateFoodCount(value: number): void {
    this.updateCount.emit(value);
  }
}
