import {
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FeaturedHotelInterface } from '../../../types';

@Component({
  selector: 'app-featured-hotels',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './featured-hotels.component.html',
  styleUrl: './featured-hotels.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedHotelsComponent {
  title = input<string>();
  hotels = input.required<FeaturedHotelInterface[]>()
}
