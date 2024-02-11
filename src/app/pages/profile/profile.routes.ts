import {Routes} from '@angular/router';
import {ProfileComponent} from './profile.component';

export const profileRoutes: Routes = [
    {
        path: '',
        component: ProfileComponent,
        children: [
            {
                path: 'restaurants',
                loadComponent: () => import('../../components/profile/profile-saved-restaurants/profile-saved-restaurants.component')
                    .then(m=> m.ProfileSavedRestaurantsComponent)
            },
            {
                path: 'bookings',
                loadComponent: () => import('../../components/profile/profile-bookings/profile-bookings.component')
                    .then(m=> m.ProfileBookingsComponent)
            },
            {
                path: 'payment-details',
                loadComponent: () => import('../../components/profile/payment-details/payment-details.component')
                    .then(m=> m.PaymentDetailsComponent)
            },
            {
                path: 'settings',
                loadComponent: () => import('../../components/profile/profile-settings/profile-settings.component')
                    .then(m=> m.ProfileSettingsComponent)
            },
            {
                path: 'addresses',
                loadComponent: () => import('../../components/profile/profile-addresses/profile-addresses.component')
                    .then(m=> m.ProfileAddressesComponent)
            },
            {
                path: 'reviews-and-ratings',
                loadComponent: () => import('../../components/profile/profile-reviews-and-ratings/profile-reviews-and-ratings.component')
                    .then(m=> m.ProfileReviewsAndRatingsComponent)
            },
            {
                path: '',
                redirectTo: 'restaurants',
                pathMatch:'full'
            }
        ]
    }
];
