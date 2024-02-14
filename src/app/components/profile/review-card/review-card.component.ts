import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ReviewInterface } from '../../../types';
import { RatingComponent } from '../../base/rating/rating.component';
import { ReviewGalleryComponent } from '../../base/review-gallery/review-gallery.component';

@Component({
  selector: 'app-review-card',
  standalone: true,
  imports: [RatingComponent, ReviewGalleryComponent],
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewCardComponent {
  review = input.required<ReviewInterface>();
}
