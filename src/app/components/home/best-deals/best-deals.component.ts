import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MediaInterface } from '../../../types';

@Component({
  selector: 'app-best-deals',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './best-deals.component.html',
  styleUrl: './best-deals.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BestDealsComponent {
  items = signal<MediaInterface[]>([
    {
      id: 1,
      url:  'assets/images/best_deals_1.png',
    },
    {
      id: 2,
      url:  'assets/images/best_deals_2.png',
    },
    {
      id: 3,
      url:  'assets/images/best_deals_3.png',
    },
    {
      id: 4,
      url:  'assets/images/best_deals_4.png',
    },
  ]);
}
