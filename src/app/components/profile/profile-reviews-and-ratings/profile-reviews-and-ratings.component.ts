import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ReviewCardComponent } from '../review-card/review-card.component';

@Component({
  selector: 'app-profile-reviews-and-ratings',
  standalone: true,
  imports: [ReviewCardComponent],
  templateUrl: './profile-reviews-and-ratings.component.html',
  styleUrl: './profile-reviews-and-ratings.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileReviewsAndRatingsComponent {
  reviews = signal(
    [...new Array(4)].map((_, id) => ({
      id,
      name: 'Prashant Kumar Singh',
      rating: Math.round(Math.random() * 3) + 2,
      image: 'assets/images/profile-image-small.png',
      text: 'If you wanna take a break from Varanasi you find a great location and hospitality in this rooftop in the heart of the town. Food is really tasty and staff really great!',

      gallery: [
        {
          id: 1,
          url: 'assets/images/cake.png',
        },
        {
          id: 1,
          url: 'assets/images/cake.png',
        },
        {
          id: 1,
          url: 'assets/images/cake.png',
        },
      ],
    })),
  );
}
