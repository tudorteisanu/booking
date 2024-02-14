import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';

@Component({
    selector: 'app-rating',
    standalone: true,
    imports: [],
    templateUrl: './rating.component.html',
    styleUrl: './rating.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingComponent {
  rating = input(0);
  roundedRating = computed(() => Math.floor(this.rating()));
  filledStars = computed(() => [...new Array(this.roundedRating())]);
  unfilledStars = computed(() => [...new Array(5-this.roundedRating())]);
}
