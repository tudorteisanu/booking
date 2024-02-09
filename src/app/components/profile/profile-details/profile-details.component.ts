import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-profile-details',
  standalone: true,
  imports: [],
  templateUrl: './profile-details.component.html',
  styleUrl: './profile-details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileDetailsComponent {
  contacts = [
    {
      type: 'email',
      value: 'officialprashanttt@gmail.com',
      icon: 'assets/icons/sms.svg'
    },

    {
      type: 'email',
      value: 'officialprashanttt@gmail.com',
      icon: 'assets/icons/sms.svg'
    },
    {
      type: 'phone',
      value: '+91 8009396321',
      icon: 'assets/icons/call.svg'
    },
    {
      type: 'location',
      value: 'New Delhi India',
      icon: 'assets/icons/location.svg',
    },
    {
      type: 'location',
      value: 'New Delhi India',
      icon: 'assets/icons/location.svg',
    },
    {
      type: 'bookings',
      value: '7 Hotels Booked',
      icon: 'assets/icons/calendar.svg',
    },
  ];
}
