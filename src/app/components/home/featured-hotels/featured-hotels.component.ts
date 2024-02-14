import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

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
  featuredHotels = signal([
    {
      id: 1,
      image: 'assets/images/image_1.png',
      name: 'Sandoz',
      location: 'Connaught Place, Central Delhi',
      detail: '₹ 2,100 for 2 (approx) | North Indian, Asian',
      rating: Math.round(Math.random() * 3 + 2),
    },
    {
      id: 2,
      image: 'assets/images/image_2.png',
      name: 'Sandoz',
      location: 'Connaught Place, Central Delhi',
      detail: '₹ 2,100 for 2 (approx) | North Indian, Asian',
      rating: Math.round(Math.random() * 3 + 2),
    },
    {
      id: 3,
      image: 'assets/images/image_3.png',
      name: 'Sandoz',
      location: 'Connaught Place, Central Delhi',
      detail: '₹ 2,100 for 2 (approx) | North Indian, Asian',
      rating: Math.round(Math.random() * 3 + 2),
    },
    {
      id: 4,
      image: 'assets/images/image_4.png',
      name: 'Sandoz',
      location: 'Connaught Place, Central Delhi',
      detail: '₹ 2,100 for 2 (approx) | North Indian, Asian',
      rating: Math.round(Math.random() * 3 + 2),
    },
  ]);
}
