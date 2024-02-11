import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
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
  @Input() gallery: HotelGalleryType = [];
}
