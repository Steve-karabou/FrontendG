import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDriverComponent } from './display-driver.component';

describe('DisplayDriverComponent', () => {
  let component: DisplayDriverComponent;
  let fixture: ComponentFixture<DisplayDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDriverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
