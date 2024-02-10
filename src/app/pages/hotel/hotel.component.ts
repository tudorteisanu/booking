import { Component } from '@angular/core';
import {HotelDetailsComponent} from "../../components/hotels/hotel-details/hotel-details.component";
import {HotelInterface} from "../../types";
import {HotelGalleryComponent} from "../../components/hotels/hotel-gallery/hotel-gallery.component";
import {AvailableOffersComponent} from "../../components/hotels/available-offers/available-offers.component";
import {RestaurantMenusComponent} from "../../components/hotels/restaurant-menus/restaurant-menus.component";
import {FoodMenuComponent} from "../../components/hotels/food-menu/food-menu.component";
import {ReviewsAndRatingsComponent} from "../../components/hotels/reviews-and-ratings/reviews-and-ratings.component";
import {ReviewsComponent} from "../../components/hotels/reviews/reviews.component";

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
    ReviewsComponent
  ],
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.css'
})
export class HotelComponent {
  hotel: HotelInterface = {
    name: 'Hotel Ultra Max',
    location: 'Connaught Place, Central Delhi',
    distance: {
      unit: 'km',
      count: 0.7,
      place: 'Banaras Ghats'
    },
    open: {
      from: '10:00 AM',
      to: '11:00 PM'
    },
    rating: 4.5,
    reviews: 540,
    gallery: [
      {
        id: 1,
        url: 'assets/images/gallery_1.png'
      },
      {
        id: 2,
        url: 'assets/images/gallery_2.jpeg'
      },
      {
        id: 3,
        url: 'assets/images/gallery_3.jpeg'
      },
      {
        id: 4,
        url: 'assets/images/gallery_4.jpeg'
      },
      {
        id: 4,
        url: 'assets/images/gallery_5.jpeg'
      },
    ],
    price: '₹ 2,000 for 2 | North Indian'
  }
}
