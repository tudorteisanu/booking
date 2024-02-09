import {ChangeDetectionStrategy, Component, Input, WritableSignal} from '@angular/core';
import {BookingInterface} from "../../../types";
import {ClickOutsideDirective} from "../../../directives/click-outside.directive";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-booking-modal',
  standalone: true,
  imports: [
    ClickOutsideDirective,
    NgOptimizedImage,
  ],
  templateUrl: './booking-modal.component.html',
  styleUrl: './booking-modal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingModalComponent {
  @Input({required: true}) booking!: BookingInterface;
  @Input({required: true}) displayed!: WritableSignal<boolean>;

  closeDialog(): void {
    this.displayed.set(false)
  }
}
