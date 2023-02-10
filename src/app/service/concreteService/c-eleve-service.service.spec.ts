import { TestBed } from '@angular/core/testing';

import { CEleveServiceService } from './c-eleve-service.service';

describe('CEleveServiceService', () => {
  let service: CEleveServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CEleveServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
