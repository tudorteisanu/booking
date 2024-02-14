import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ReviewGalleryComponent } from '../../base/review-gallery/review-gallery.component';
import { HotelReviewInterface } from '../../../types';

@Component({
  selector: 'app-hotel-review-card',
  standalone: true,
  imports: [ReviewGalleryComponent],
  templateUrl: './hotel-review-card.component.html',
  styleUrl: './hotel-review-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HotelReviewCardComponent {
  review = input.required<HotelReviewInterface>();
}
