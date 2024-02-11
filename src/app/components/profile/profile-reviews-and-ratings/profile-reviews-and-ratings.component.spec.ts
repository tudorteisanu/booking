import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileReviewsAndRatingsComponent } from './profile-reviews-and-ratings.component';

describe('ProfileReviewsAndRatingsComponent', () => {
    let component: ProfileReviewsAndRatingsComponent;
    let fixture: ComponentFixture<ProfileReviewsAndRatingsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ProfileReviewsAndRatingsComponent]
        })
            .compileComponents();
    
        fixture = TestBed.createComponent(ProfileReviewsAndRatingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
