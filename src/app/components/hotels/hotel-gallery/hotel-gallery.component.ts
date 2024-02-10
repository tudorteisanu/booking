import {Component, Input, signal} from '@angular/core';
import {HotelGalleryType} from "../../../types";
import {NgClass} from "@angular/common";
import {HotelGalleryItemComponent} from "../hotel-gallery-item/hotel-gallery-item.component";

@Component({
  selector: 'app-hotel-gallery',
  standalone: true,
  imports: [
    NgClass,
    HotelGalleryItemComponent
  ],
  templateUrl: './hotel-gallery.component.html',
  styleUrl: './hotel-gallery.component.css'
})
export class HotelGalleryComponent {
  @Input() gallery: HotelGalleryType = [];

  activeIndex = signal(Math.round(Math.random()*this.gallery.length))

  slideNext(): void {
    if (this.activeIndex() === this.gallery.length -1 ) {
      this.activeIndex.set(0)
      return
    }

    this.activeIndex.update(index => index+1)
  }

  slidePrev(): void {
    if (this.activeIndex() === 0) {
      this.activeIndex.set(this.gallery.length - 1);
      return;
    }

    this.activeIndex.update(index => index-1);
  }
}
