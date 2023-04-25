import { TestBed } from '@angular/core/testing';

import { LoanPlansService } from './loan-plans.service';

describe('LoanPlansService', () => {
  let service: LoanPlansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanPlansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
