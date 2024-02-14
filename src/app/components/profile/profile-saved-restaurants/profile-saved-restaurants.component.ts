import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RestaurantInterface } from '../../../types';
import { RestaurantCardComponent } from '../restaurant-card/restaurant-card.component';
import { SearchComponent } from '../../base/search/search.component';

@Component({
  selector: 'app-profile-saved-restaurants',
  standalone: true,
  imports: [RestaurantCardComponent, SearchComponent],
  templateUrl: './profile-saved-restaurants.component.html',
  styleUrl: './profile-saved-restaurants.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileSavedRestaurantsComponent {
  restaurants = signal<RestaurantInterface[]>(
    [...new Array(8)].map((_, id) => ({
      id,
      name: 'Hotel Name Detail',
      foodType: 'Northern food',
      location: 'New Delhi',
      menu: 'View menu',
      image: 'assets/images/hotel.png',
    })),
  );
}
