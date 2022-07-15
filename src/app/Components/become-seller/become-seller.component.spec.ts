import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeSellerComponent } from './become-seller.component';

describe('BecomeSellerComponent', () => {
  let component: BecomeSellerComponent;
  let fixture: ComponentFixture<BecomeSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BecomeSellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
