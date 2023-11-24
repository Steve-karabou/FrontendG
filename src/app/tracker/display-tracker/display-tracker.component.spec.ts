import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTrackerComponent } from './display-tracker.component';

describe('DisplayTrackerComponent', () => {
  let component: DisplayTrackerComponent;
  let fixture: ComponentFixture<DisplayTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayTrackerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
