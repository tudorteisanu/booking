import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { HotelInterface } from '../../../types';

@Component({
  selector: 'app-hotel-details',
  standalone: true,
  imports: [],
  templateUrl: './hotel-details.component.html',
  styleUrl: './hotel-details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HotelDetailsComponent {
  hotel = input.required<HotelInterface>();
}
