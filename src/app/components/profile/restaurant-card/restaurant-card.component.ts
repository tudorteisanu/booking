import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RestaurantInterface } from '../../../types';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-restaurant-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './restaurant-card.component.html',
  styleUrl: './restaurant-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RestaurantCardComponent {
  restaurant = input.required<RestaurantInterface>();
}
