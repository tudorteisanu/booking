import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-available-offers',
  standalone: true,
  imports: [],
  templateUrl: './available-offers.component.html',
  styleUrl: './available-offers.component.css'
})
export class AvailableOffersComponent {
  offers = signal([
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
  ])

  formattedText(item: any): string {
    return `${item.day}, ${item.from} - ${item.to}`
  }
}
