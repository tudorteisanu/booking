import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelReviewCardComponent } from './hotel-review-card.component';

describe('HotelReviewCardComponent', () => {
    let component: HotelReviewCardComponent;
    let fixture: ComponentFixture<HotelReviewCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HotelReviewCardComponent]
        })
            .compileComponents();
    
        fixture = TestBed.createComponent(HotelReviewCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
