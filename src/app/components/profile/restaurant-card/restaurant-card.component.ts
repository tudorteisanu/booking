import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {RestaurantInterface} from "../../../types";

@Component({
  selector: 'app-restaurant-card',
  standalone: true,
  imports: [],
  templateUrl: './restaurant-card.component.html',
  styleUrl: './restaurant-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RestaurantCardComponent {
  @Input({required: true}) restaurant!: RestaurantInterface;
}
