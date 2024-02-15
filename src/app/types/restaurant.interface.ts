import { FoodTypes } from "./foodTypes.enum";
import { MediaInterface } from "./media.interface";

export interface RestaurantInterface {
  id: number;
  name: string;
  foodType: FoodTypes;
  location: string;
  menu: string;
  image: MediaInterface;
}
