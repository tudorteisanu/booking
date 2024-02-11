import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
    selector: 'app-rating',
    standalone: true,
    imports: [],
    templateUrl: './rating.component.html',
    styleUrl: './rating.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingComponent {
  @Input({required: true}) rating = 0;

  get roundedRating(): number {
      return Math.floor(this.rating);
  }

  get filledStars() {
      return [...new Array(this.roundedRating)];
  }

  get unfilledStars() {
      return [...new Array(5-this.roundedRating)];
  }
}
