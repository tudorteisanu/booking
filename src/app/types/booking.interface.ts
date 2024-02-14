import { BookingStatus } from '@/enums';

export interface BookingInterface {
  date: string;
  image: string;
  name: string;
  location: string;
  id: string;
  status: BookingStatus;
}
