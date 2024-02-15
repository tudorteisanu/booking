import { MediaInterface } from './media.interface';
import { UserInterface } from './user.interface';

export interface HotelReviewInterface {
  id: number;
  author: UserInterface;
  comment: string;
  review: number;
  reviewCount: number;
  gallery: MediaInterface[];
}
