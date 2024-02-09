import {Component, Input, signal} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-featured-hotels',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './featured-hotels.component.html',
  styleUrl: './featured-hotels.component.css'
})
export class FeaturedHotelsComponent {
  @Input() title = '';
  featuredHotels = signal([
    {
      image: 'assets/images/image_1.png',
      name: 'Sandoz',
      location: 'Connaught Place, Central Delhi',
      detail: '₹ 2,100 for 2 (approx) | North Indian, Asian',
      rating: Math.round(Math.random()*3 +2)
    },
    {
      image: 'assets/images/image_2.png',
      name: 'Sandoz',
      location: 'Connaught Place, Central Delhi',
      detail: '₹ 2,100 for 2 (approx) | North Indian, Asian',
      rating: Math.round(Math.random()*3 +2)
    },
    {
      image: 'assets/images/image_3.png',
      name: 'Sandoz',
      location: 'Connaught Place, Central Delhi',
      detail: '₹ 2,100 for 2 (approx) | North Indian, Asian',
      rating: Math.round(Math.random()*3 +2)
    },
    {
      image: 'assets/images/image_4.png',
      name: 'Sandoz',
      location: 'Connaught Place, Central Delhi',
      detail: '₹ 2,100 for 2 (approx) | North Indian, Asian',
      rating: Math.round(Math.random()*3 +2)
    },
  ])
}
