import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDeliveryPackageComponent } from './display-delivery-package.component';

describe('DisplayDeliveryPackageComponent', () => {
  let component: DisplayDeliveryPackageComponent;
  let fixture: ComponentFixture<DisplayDeliveryPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDeliveryPackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayDeliveryPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
