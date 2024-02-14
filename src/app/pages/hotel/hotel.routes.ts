import { Routes } from '@angular/router';
import { HotelComponent } from './hotel.component';

export const hotelRoutes: Routes = [
  {
    path: ':id',
    component: HotelComponent,
  }
];
