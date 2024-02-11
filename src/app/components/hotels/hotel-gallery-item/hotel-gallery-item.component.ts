import {Component, Input, signal} from '@angular/core';

@Component({
    selector: 'app-hotel-gallery-item',
    standalone: true,
    imports: [],
    templateUrl: './hotel-gallery-item.component.html',
    styleUrl: './hotel-gallery-item.component.css'
})
export class HotelGalleryItemComponent {
  @Input() url: string = '';

  loaded = signal(false);

  setLoaded(): void {
      this.loaded.set(true);
  }
}
