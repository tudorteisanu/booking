import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketDiscountComponent } from './basket-discount.component';

describe('BasketDiscountComponent', () => {
    let component: BasketDiscountComponent;
    let fixture: ComponentFixture<BasketDiscountComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BasketDiscountComponent]
        })
            .compileComponents();
    
        fixture = TestBed.createComponent(BasketDiscountComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
