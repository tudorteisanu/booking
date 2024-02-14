import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {BookingInterface} from '../../../types';
import {BookingStatus} from '../../../enums';
import {NgClass, NgOptimizedImage} from '@angular/common';
import {BookingModalComponent} from '../booking-modal/booking-modal.component';

@Component({
    selector: 'app-booking-card',
    standalone: true,
    imports: [NgClass, BookingModalComponent, NgOptimizedImage],
    templateUrl: './booking-card.component.html',
    styleUrl: './booking-card.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingCardComponent {
  booking  = input.required<BookingInterface>();
  isModalDisplayed = false;

  getStatusClass(status: BookingStatus): string {
      if (status === BookingStatus.Confirmed) {
          return 'text-light-green';
      }

      if (status === BookingStatus.Ended) {
          return 'text-red-500';
      }

      return 'text-gray-500';
  }

  showDetails(): void {
      this.isModalDisplayed=true;
  }
}
