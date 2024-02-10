import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableOffersComponent } from './available-offers.component';

describe('AvailableOffersComponent', () => {
  let component: AvailableOffersComponent;
  let fixture: ComponentFixture<AvailableOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailableOffersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvailableOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
