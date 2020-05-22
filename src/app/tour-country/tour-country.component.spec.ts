import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourCountryComponent } from './tour-country.component';

describe('TourCountryComponent', () => {
  let component: TourCountryComponent;
  let fixture: ComponentFixture<TourCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
