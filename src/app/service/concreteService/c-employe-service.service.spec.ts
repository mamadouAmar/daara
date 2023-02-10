import { TestBed } from '@angular/core/testing';

import { CEmployeServiceService } from './c-employe-service.service';

describe('CEmployeServiceService', () => {
  let service: CEmployeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CEmployeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
