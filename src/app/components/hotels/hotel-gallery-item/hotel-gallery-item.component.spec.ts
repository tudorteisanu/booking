import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelGalleryItemComponent } from './hotel-gallery-item.component';

describe('HotelGalleryItemComponent', () => {
    let component: HotelGalleryItemComponent;
    let fixture: ComponentFixture<HotelGalleryItemComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HotelGalleryItemComponent]
        })
            .compileComponents();
    
        fixture = TestBed.createComponent(HotelGalleryItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
