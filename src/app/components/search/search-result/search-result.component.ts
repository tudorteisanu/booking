import {ChangeDetectionStrategy, Component, signal} from '@angular/core';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultComponent {
  hotels = signal([
    {
      id: 1,
      name: 'Hotel Name Detail',
      image: 'assets/images/hotel.png',
      description: 'Indian Accent showcases inventive Indian cuisine by complementing the flavours and traditions of India with. Indian Accent showcases inventive Indian cuisine by complementing the flavours and traditions of India with. Indian Accent showcases inventive Indian cuisine by complementing the flavours and traditions of India with. Indian Accent showcases inventive Indian cuisine by complementing the flavours and traditions of India with.',
      rating: 4.5,
      reviews: 450,
      location: 'New Delhi',
      menu: 'View menu',
      foodType: 'Northern food'
    },
    {
      id: 1,
      name: 'Hotel Name Detail',
      image: 'assets/images/hotel.png',
      description: 'Indian Accent showcases inventive Indian cuisine by complementing the flavours and traditions of India with. Indian Accent showcases inventive Indian cuisine by complementing the flavours and traditions of India with. Indian Accent showcases inventive Indian cuisine by complementing the flavours and traditions of India with. Indian Accent showcases inventive Indian cuisine by complementing the flavours and traditions of India with.',
      rating: 4.5,
      reviews: 450,
      location: 'New Delhi',
      menu: 'View menu',
      foodType: 'Northern food'
    },
    {
      id: 1,
      name: 'Hotel Name Detail',
      image: 'assets/images/hotel.png',
      description: 'Indian Accent showcases inventive Indian cuisine by complementing the flavours and traditions of India with. Indian Accent showcases inventive Indian cuisine by complementing the flavours and traditions of India with. Indian Accent showcases inventive Indian cuisine by complementing the flavours and traditions of India with. Indian Accent showcases inventive Indian cuisine by complementing the flavours and traditions of India with.',
      rating: 4.5,
      reviews: 450,
      location: 'New Delhi',
      menu: 'View menu',
      foodType: 'Northern food'
    },
    {
      id: 1,
      name: 'Hotel Name Detail',
      image: 'assets/images/hotel.png',
      description: 'Indian Accent showcases inventive Indian cuisine by complementing the flavours and traditions of India with. Indian Accent showcases inventive Indian cuisine by complementing the flavours and traditions of India with. Indian Accent showcases inventive Indian cuisine by complementing the flavours and traditions of India with. Indian Accent showcases inventive Indian cuisine by complementing the flavours and traditions of India with.',
      rating: 4.5,
      reviews: 450,
      location: 'New Delhi',
      menu: 'View menu',
      foodType: 'Northern food'
    },
  ])
}
