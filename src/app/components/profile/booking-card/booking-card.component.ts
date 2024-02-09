import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {BookingInterface} from "../../../types";
import {BookingStatus} from "../../../enums";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-booking-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './booking-card.component.html',
  styleUrl: './booking-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingCardComponent {
  @Input({required: true}) booking!: BookingInterface;

  getStatusClass(status: BookingStatus): string {
    if (status === BookingStatus.Confirmed) {
      return 'text-green-500'
    }

    if (status === BookingStatus.Ended) {
      return 'text-red-500'
    }

    return 'text-gray-500'
  }
}
