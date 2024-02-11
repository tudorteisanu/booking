import { Routes } from '@angular/router';
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {ProfileLayoutComponent} from "./layouts/profile-layout/profile-layout.component";

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    loadChildren: () => import('./pages/home/home.routes').then(m => m.homeRoutes),
  },
  {
    path: 'profile',
    component: ProfileLayoutComponent,
    loadChildren: () => import('./pages/profile/profile.routes').then(m => m.profileRoutes)
  },
  {
    path: 'hotel',
    component: MainLayoutComponent,
    loadChildren: () => import('./pages/hotel/hotel.routes').then(m => m.hotelRoutes)
  },
  {
    path: 'search-hotel',
    component: MainLayoutComponent,
    loadChildren: () => import('./pages/search-hotel/search-hotel.routes').then(m => m.searchHotelRoutes)
  },
  {
    path: '**',
    component: MainLayoutComponent,
    loadChildren: () => import('./pages/not-found/not-found.routes').then(m => m.notFoundRoutes)
  }
];
