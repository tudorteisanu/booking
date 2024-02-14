import { Component, inject } from '@angular/core';
import { HotelDetailsComponent } from '../../components/hotels/hotel-details/hotel-details.component';
import { HotelInterface } from '../../types';
import { HotelGalleryComponent } from '../../components/hotels/hotel-gallery/hotel-gallery.component';
import { AvailableOffersComponent } from '../../components/hotels/available-offers/available-offers.component';
import { RestaurantMenusComponent } from '../../components/hotels/restaurant-menus/restaurant-menus.component';
import { FoodMenuComponent } from '../../components/hotels/food-menu/food-menu.component';
import { ReviewsAndRatingsComponent } from '../../components/hotels/reviews-and-ratings/reviews-and-ratings.component';
import { ReviewsComponent } from '../../components/hotels/reviews/reviews.component';
import { CalendarComponent } from '../../components/base/calendar/calendar.component';
import { TimeSlotComponent } from '../../components/hotels/time-slot/time-slot.component';
import { BasketComponent } from '../../components/hotels/basket/basket.component';
import {
  BasketBookingDetailsComponent
} from '../../components/hotels/basket-booking-details/basket-booking-details.component';
import { BasketDiscountComponent } from '../../components/hotels/basket-discount/basket-discount.component';
import { HotelStore } from "./hotel.store";

@Component({
  selector: 'app-hotel',
  standalone: true,
  imports: [
    HotelDetailsComponent,
    HotelGalleryComponent,
    AvailableOffersComponent,
    RestaurantMenusComponent,
    FoodMenuComponent,
    ReviewsAndRatingsComponent,
    ReviewsComponent,
    CalendarComponent,
    TimeSlotComponent,
    BasketComponent,
    BasketBookingDetailsComponent,
    BasketDiscountComponent
  ],
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.css',
  providers: [
    HotelStore,
  ]
})
export class HotelComponent {
  hotelStore = inject(HotelStore);
  hotel = this.hotelStore.hotel;
}
