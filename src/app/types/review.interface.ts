import { MediaInterface } from './media.interface';

export interface ReviewInterface {
  id: number;
  name: string;
  rating: number;
  image: string;
  text: string;
  gallery: MediaInterface[];
}
