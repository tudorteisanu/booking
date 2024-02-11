import {MediaInterface} from './media.interface';

export interface HotelWorkTimeInterface {
    from: string;
    to: string;
}

export interface HotelDistanceInterface {
    count: number;
    unit: string;
    place: string;
}

export type HotelGalleryType = MediaInterface[];

export interface HotelInterface {
  name: string;
  location: string;
  distance: HotelDistanceInterface;
  open: HotelWorkTimeInterface;
  rating: number;
  reviews: number;
  gallery: HotelGalleryType,
  price: string;
}
