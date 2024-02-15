import { MediaInterface } from "./media.interface";

export interface UserInterface {
  id: number;
  name: string;
  avatar?: MediaInterface;
}
