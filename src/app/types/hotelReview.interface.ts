import {MediaInterface} from './media.interface';

export interface HotelReviewInterface {
  id: number;
  name: string;
  comment: string;
  review: number;
  reviewCount: number;
  gallery: MediaInterface[]
}
