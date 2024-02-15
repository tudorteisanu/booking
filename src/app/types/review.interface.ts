import { MediaInterface } from './media.interface';
import { UserInterface } from './user.interface';

export interface ReviewInterface {
  id: number;
  author: UserInterface;
  rating: number;
  text: string;
  gallery: MediaInterface[];
}
