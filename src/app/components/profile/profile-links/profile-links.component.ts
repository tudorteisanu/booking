import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
    selector: 'app-profile-links',
    standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './profile-links.component.html',
    styleUrl: './profile-links.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileLinksComponent {
    links = [
        {
            label: 'Saved Restaurants',
            to: '/profile/restaurants'
        },
        {
            label: 'Bookings',
            to: '/profile/bookings'
        },
        {
            label: 'Payment Details',
            to: '/profile/payment-details'
        },
        {
            label: 'Settings',
            to: '/profile/settings'
        },
        {
            label: 'Reviews & Ratings',
            to: '/profile/reviews-and-ratings'
        },
        {
            label: 'Saved Address',
            to: '/profile/addresses'
        },
    ];
}
