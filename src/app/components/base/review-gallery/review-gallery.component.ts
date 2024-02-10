import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-review-gallery',
  standalone: true,
  imports: [],
  templateUrl: './review-gallery.component.html',
  styleUrl: './review-gallery.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewGalleryComponent {
  @Input() gallery: any[] = [];
}
