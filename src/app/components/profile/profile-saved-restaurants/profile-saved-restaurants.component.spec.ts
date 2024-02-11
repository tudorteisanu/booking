import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSavedRestaurantsComponent } from './profile-saved-restaurants.component';

describe('ProfileSavedRestaurantsComponent', () => {
    let component: ProfileSavedRestaurantsComponent;
    let fixture: ComponentFixture<ProfileSavedRestaurantsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ProfileSavedRestaurantsComponent]
        })
            .compileComponents();
    
        fixture = TestBed.createComponent(ProfileSavedRestaurantsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
