import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourAvailableComponent } from './tour-available.component';

describe('TourAvailableComponent', () => {
  let component: TourAvailableComponent;
  let fixture: ComponentFixture<TourAvailableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourAvailableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
