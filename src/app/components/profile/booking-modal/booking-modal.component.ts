import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  input,
  Output,
} from '@angular/core';
import { BookingInterface } from '../../../types';
import { ClickOutsideDirective } from '../../../directives/click-outside.directive';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-booking-modal',
  standalone: true,
  imports: [ClickOutsideDirective, NgOptimizedImage],
  templateUrl: './booking-modal.component.html',
  styleUrl: './booking-modal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingModalComponent {
  booking = input.required<BookingInterface>();
  displayed = input.required<boolean>();

  @Output()
  displayedChange = new EventEmitter();

  closeDialog(): void {
    this.displayedChange.emit(false);
  }
}
