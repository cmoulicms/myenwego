import { TestBed } from '@angular/core/testing';

import { F1indiaService } from './f1india.service';

describe('F1indiaService', () => {
  let service: F1indiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(F1indiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
