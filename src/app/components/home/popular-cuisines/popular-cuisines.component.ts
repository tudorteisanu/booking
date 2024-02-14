import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-popular-cuisines',
  standalone: true,
  imports: [],
  templateUrl: './popular-cuisines.component.html',
  styleUrl: './popular-cuisines.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopularCuisinesComponent {
  items = signal([
    {
      name: 'North Indian',
      restaurantsCount: 829,
    },
    {
      name: 'South Indian',
      restaurantsCount: 829,
    },
    {
      name: 'South Indian',
      restaurantsCount: 829,
    },
    {
      name: 'Chinese',
      restaurantsCount: 829,
    },
    {
      name: 'European',
      restaurantsCount: 829,
    },
  ]);
}
