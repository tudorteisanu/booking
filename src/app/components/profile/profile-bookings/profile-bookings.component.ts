import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { BookingCardComponent } from '../booking-card/booking-card.component';
import { BookingInterface } from '../../../types';
import { BookingStatus } from '../../../enums';
import { SearchComponent } from '../../base/search/search.component';

@Component({
  selector: 'app-profile-bookings',
  standalone: true,
  imports: [BookingCardComponent, SearchComponent],
  templateUrl: './profile-bookings.component.html',
  styleUrl: './profile-bookings.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileBookingsComponent {
  currentBookings = signal<BookingInterface[]>([
    {
      id: '173826',
      name: 'Golden Tulip Hotel',
      location: 'Riverside Mall, Gomti Nagar, Lucknow, Uttar Pradesh, 231217',
      date: 'Sun, 07 Jan at 07:00 PM for 2 Quests',
      status: BookingStatus.Confirmed,
      image: 'assets/images/hotel.png',
    },
  ]);
  pastBookings = signal<BookingInterface[]>([
    {
      id: '173825',
      name: 'Golden Tulip Hotel',
      location: 'Riverside Mall, Gomti Nagar, Lucknow, Uttar Pradesh, 231217',
      date: 'Sun, 07 Jan at 07:00 PM for 2 Quests',
      status: BookingStatus.Ended,
      image: 'assets/images/hotel.png',
    },
    {
      id: '173824',
      name: 'Golden Tulip Hotel',
      location: 'Riverside Mall, Gomti Nagar, Lucknow, Uttar Pradesh, 231217',
      date: 'Sun, 07 Jan at 07:00 PM for 2 Quests',
      status: BookingStatus.Ended,
      image: 'assets/images/hotel.png',
    },
  ]);
}
