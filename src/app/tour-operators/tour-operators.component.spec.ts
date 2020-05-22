import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourOperatorsComponent } from './tour-operators.component';

describe('TourOperatorsComponent', () => {
  let component: TourOperatorsComponent;
  let fixture: ComponentFixture<TourOperatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourOperatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
