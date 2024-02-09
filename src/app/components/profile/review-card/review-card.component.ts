import {ChangeDetectionStrategy, Component, Input, signal} from '@angular/core';
import {ReviewInterface} from "../../../types";

@Component({
  selector: 'app-review-card',
  standalone: true,
  imports: [],
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewCardComponent {
  @Input() review!: ReviewInterface;

  get filledStars() {
    return [...new Array(this.review.rating)]
  }

  get unfilledStars() {
    return [...new Array(5-this.review.rating)]
  }

}
