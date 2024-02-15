import { signalStore, withState } from '@ngrx/signals';
import { FoodTypes, HotelInterface } from '@/types';

type BooksState = {
  hotel: HotelInterface;
  isLoading: boolean;
};

const initialState: BooksState = {
  hotel: {
    id: 1,
    image: {
      id: 1,
      url: '',
    },
    name: 'Hotel Ultra Max',
    location: 'Connaught Place, Central Delhi',
    distance: {
      unit: 'km',
      count: 0.7,
      place: 'Banaras Ghats',
    },
    workTime: {
      from: '10:00 AM',
      to: '11:00 PM',
    },
    rating: 4.5,
    reviews: 540,
    gallery: [
      {
        id: 1,
        url: 'assets/images/gallery_1.png',
      },
      {
        id: 2,
        url: 'assets/images/gallery_2.jpeg',
      },
      {
        id: 3,
        url: 'assets/images/gallery_3.jpeg',
      },
      {
        id: 4,
        url: 'assets/images/gallery_4.jpeg',
      },
      {
        id: 4,
        url: 'assets/images/gallery_5.jpeg',
      },
    ],
    price: '₹ 2,000 for 2',
    foodTypes: [FoodTypes.NorthIndian]
  },
  isLoading: false,
};

export const HotelStore = signalStore(withState(initialState));
