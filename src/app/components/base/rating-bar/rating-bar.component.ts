import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-rating-bar',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './rating-bar.component.html',
  styleUrl: './rating-bar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingBarComponent {
  rating = input<number>(0);
  roundedRating = computed(() => Math.floor(this.rating()));
  width = computed(() => `${(this.roundedRating() * 100) / 5}%`);
}
