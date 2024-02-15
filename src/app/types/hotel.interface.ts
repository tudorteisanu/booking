import { FoodTypes } from './foodTypes.enum';
import { MediaInterface } from './media.interface';

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
  id: number;
  name: string;
  location: string;
  distance: HotelDistanceInterface;
  workTime: HotelWorkTimeInterface;
  rating: number;
  reviews: number;
  gallery: HotelGalleryType,
  price: string;
  image: MediaInterface;
  foodTypes: FoodTypes[];
}

export type FeaturedHotelInterface = Pick<HotelInterface, "id" | "location" | "name" | "image" | "price" | "foodTypes" | "rating">
