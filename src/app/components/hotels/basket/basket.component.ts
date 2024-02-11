import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {FoodCardComponent} from "../food-card/food-card.component";
import {BasketInterface} from "../../../types";

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [
    FoodCardComponent
  ],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasketComponent {
  chosenFood = signal<BasketInterface[]>([
    {
      id: 1,
      name: 'Garden Vegetable Salad',
      category: 'Crisp & refreshing from garden',
      price: 30,
      image: 'assets/images/food.png',
      count: 2
    },
    {
      id: 1,
      name: 'Garden Vegetable Salad',
      category: 'Crisp & refreshing from garden',
      price: 30,
      image: 'assets/images/food.png',
      count: 2
    },
    {
      id: 1,
      name: 'Garden Vegetable Salad',
      category: 'Crisp & refreshing from garden',
      price: 30,
      image: 'assets/images/food.png',
      count: 2
    },
    {
      id: 1,
      name: 'Garden Vegetable Salad',
      category: 'Crisp & refreshing from garden',
      price: 30,
      image: 'assets/images/food.png',
      count: 2
    },
  ])
  totalCost = computed(() => {
    return this.chosenFood().reduce((acc, item)=> acc + (item.price * item.count), 0 )
  })

  updateFoodCount(index: number, count: number): void {
    this.chosenFood.update(value => {
      value[index] = {
        ...value[index],
        count
      }

      return value;
    })
  }
}
