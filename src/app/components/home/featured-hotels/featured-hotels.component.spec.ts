import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedHotelsComponent } from './featured-hotels.component';

describe('FeaturedHotelsComponent', () => {
    let component: FeaturedHotelsComponent;
    let fixture: ComponentFixture<FeaturedHotelsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FeaturedHotelsComponent]
        })
            .compileComponents();
    
        fixture = TestBed.createComponent(FeaturedHotelsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
