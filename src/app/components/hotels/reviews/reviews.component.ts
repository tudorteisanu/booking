import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {ReviewCardComponent} from "../../profile/review-card/review-card.component";
import {HotelReviewCardComponent} from "../hotel-review-card/hotel-review-card.component";

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [
    ReviewCardComponent,
    HotelReviewCardComponent
  ],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewsComponent {
  reviews = signal([
    {
      id: 1,
      name: 'Prashant Kumar Singh',
      comment: 'If you wanna take a break from Varanasi you find a great location and hospitality in this rooftop in the heart of the town. Food is really tasty and staff really great!',
      review: 4.5,
      reviewCount: 45,
      gallery: [
        'assets/images/cake.png',
        'assets/images/cake.png',
        'assets/images/cake.png',
      ]
    },
    {
      id: 1,
      name: 'Prashant Kumar Singh',
      comment: 'If you wanna take a break from Varanasi you find a great location and hospitality in this rooftop in the heart of the town. Food is really tasty and staff really great!',
      review: 4.5,
      reviewCount: 45,
      gallery: [
        'assets/images/cake.png',
        'assets/images/cake.png',
        'assets/images/cake.png',
      ]
    },
    {
      id: 1,
      name: 'Prashant Kumar Singh',
      comment: 'If you wanna take a break from Varanasi you find a great location and hospitality in this rooftop in the heart of the town. Food is really tasty and staff really great!',
      review: 4.5,
      reviewCount: 45,
      gallery: [
        'assets/images/cake.png',
        'assets/images/cake.png',
        'assets/images/cake.png',
      ]
    },
    {
      id: 1,
      name: 'Prashant Kumar Singh',
      comment: 'If you wanna take a break from Varanasi you find a great location and hospitality in this rooftop in the heart of the town. Food is really tasty and staff really great!',
      review: 4.5,
      reviewCount: 45,
      gallery: [
        'assets/images/cake.png',
        'assets/images/cake.png',
        'assets/images/cake.png',
      ]
    },
  ])
}
