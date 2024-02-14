import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RatingComponent } from '../../base/rating/rating.component';
import { RatingBarComponent } from '../../base/rating-bar/rating-bar.component';

@Component({
  selector: 'app-reviews-and-ratings',
  standalone: true,
  imports: [RatingComponent, RatingBarComponent],
  templateUrl: './reviews-and-ratings.component.html',
  styleUrl: './reviews-and-ratings.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewsAndRatingsComponent {
  ratings = signal([
    {
      count: 53,
      rating: Math.floor(Math.random() * 4 + 1),
      name: 'Dinning',
    },
    {
      count: 53,
      rating: 4.5,
      name: 'Dinning',
    },
    {
      count: 53,
      rating: Math.floor(Math.random() * 4 + 1),
      name: 'Dinning',
    },
    {
      count: 53,
      rating: Math.floor(Math.random() * 4 + 1),
      name: 'Dinning',
    },
    {
      count: 53,
      rating: Math.floor(Math.random() * 4 + 1),
      name: 'Dinning',
    },
  ]);
}
