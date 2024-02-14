import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OfferInterface } from '@/types';

@Component({
  selector: 'app-available-offers',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './available-offers.component.html',
  styleUrl: './available-offers.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvailableOffersComponent {
  offers = signal<OfferInterface[]>([
    {
      day: 'Sun',
      from: '06:00 PM',
      to: '09:30 PM',
      availed: 100,
    },
    {
      day: 'Sun',
      from: '06:00 PM',
      to: '09:30 PM',
      availed: 100,
    },
    {
      day: 'Sun',
      from: '06:00 PM',
      to: '09:30 PM',
      availed: 100,
    },
    {
      day: 'Sun',
      from: '06:00 PM',
      to: '09:30 PM',
      availed: 100,
    },
  ]);

  formattedText(item: OfferInterface): string {
    return `${item.day}, ${item.from} - ${item.to}`;
  }
}
