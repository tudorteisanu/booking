import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {HotelGalleryType} from '../../../types';

@Component({
  selector: 'app-review-gallery',
  standalone: true,
  imports: [],
  templateUrl: './review-gallery.component.html',
  styleUrl: './review-gallery.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewGalleryComponent {
  gallery = input.required<HotelGalleryType>();
}
