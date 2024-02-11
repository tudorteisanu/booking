import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
    selector: 'app-rating-bar',
    standalone: true,
    imports: [
        NgStyle
    ],
    templateUrl: './rating-bar.component.html',
    styleUrl: './rating-bar.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingBarComponent {
  @Input({required: true}) rating = 0;

  get roundedRating(): number {
      return Math.floor(this.rating);
  }

  get width(): string {
      return `${this.roundedRating * 100 / 5}%`;
  }
}
