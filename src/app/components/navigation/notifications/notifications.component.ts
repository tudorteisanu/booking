import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NotificationType} from "../../../enums";
import {NgClass} from "@angular/common";
import {ClickOutsideDirective} from "../../../directives/click-outside.directive";

const NOTIFICATION_ICONS  = {
  [NotificationType.EmailSent]: 'assets/icons/sms-white.svg',
  [NotificationType.HurryUp]: 'assets/icons/timer.svg',
  [NotificationType.PasswordChanged]: 'assets/icons/lock.svg',
  [NotificationType.ReservationSuccessfully]: 'assets/icons/calendar-white.svg',
}

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [
    RouterLink,
    NgClass,
    ClickOutsideDirective,
  ],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationsComponent {
  displayed = signal(false);

  items = [
    {
      title: 'Email sent!',
      text: 'Check your inbox or spam folders',
      type: NotificationType.EmailSent
    },
    {
      title: '30min left, Hurry up!',
      text: 'Hotel name is waiting for you',
      type: NotificationType.HurryUp
    },
    {
      title: 'Password changed',
      text: 'Password was changes successfully!!',
      type: NotificationType.PasswordChanged
    },
    {
      title: 'Reservation Successfully',
      text: 'Table booked in hotel name',
      type: NotificationType.ReservationSuccessfully
    },
  ]

  toggle(): void {
    this.displayed.update(value => !value)
  }

  hide(): void {
    this.displayed.set(false)
  }

  getNotificationIcon(type: NotificationType): string {
    return NOTIFICATION_ICONS[type];
  }

  getNotificationColor(type: NotificationType): string {
    switch (type){
      case NotificationType.EmailSent:
        return 'text-blue-600';

      case NotificationType.HurryUp:
        return 'text-indigo-600';

      case NotificationType.PasswordChanged:
        return 'text-red-700';

      case NotificationType.ReservationSuccessfully:
        return 'text-green-700';

      default:
        return 'text-gray-600';
    }
  }

  getNotificationIconClass(type: NotificationType): string {
    switch (type){
      case NotificationType.EmailSent:
        return 'bg-blue-600';

      case NotificationType.HurryUp:
        return 'bg-indigo-600';

      case NotificationType.PasswordChanged:
        return 'bg-red-700';

      case NotificationType.ReservationSuccessfully:
        return 'bg-green-700';

      default:
        return 'bg-gray-600';
    }
  }
}
