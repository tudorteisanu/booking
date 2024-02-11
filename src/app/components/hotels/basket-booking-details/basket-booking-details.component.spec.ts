import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketBookingDetailsComponent } from './basket-booking-details.component';

describe('BasketBookingDetailsComponent', () => {
    let component: BasketBookingDetailsComponent;
    let fixture: ComponentFixture<BasketBookingDetailsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BasketBookingDetailsComponent]
        })
            .compileComponents();
    
        fixture = TestBed.createComponent(BasketBookingDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
