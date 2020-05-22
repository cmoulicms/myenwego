import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourPriceComponent } from './tour-price.component';

describe('TourPriceComponent', () => {
  let component: TourPriceComponent;
  let fixture: ComponentFixture<TourPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
