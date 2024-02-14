import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-search-filter',
  standalone: true,
  imports: [NgClass],
  templateUrl: './search-filter.component.html',
  styleUrl: './search-filter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFilterComponent {
  filter = signal([
    {
      name: 'Cuisines',
      multiple: false,
      items: [
        {
          value: '',
          text: 'North Indian',
        },
        {
          value: '',
          text: 'North Indian',
        },
        {
          value: '',
          text: 'North Indian',
        },
      ],
    },
    {
      name: 'Tags',
      multiple: true,
      items: [
        {
          value: '',
          text: 'North Indian',
        },
        {
          value: '',
          text: 'North Indian',
        },
        {
          value: '',
          text: 'North Indian',
        },
      ],
    },
    {
      name: 'Cuisines',
      multiple: false,
      items: [
        {
          value: '',
          text: 'North Indian',
        },
        {
          value: '',
          text: 'North Indian',
        },
        {
          value: '',
          text: 'North Indian',
        },
      ],
    },
    {
      name: 'Tags',
      multiple: true,
      items: [
        {
          value: '',
          text: 'North Indian',
        },
        {
          value: '',
          text: 'North Indian',
        },
        {
          value: '',
          text: 'North Indian',
        },
      ],
    },
  ]);
}
