import { TestBed } from '@angular/core/testing';

import { CComptabiliteServiceService } from './c-comptabilite-service.service';

describe('CComptabiliteServiceService', () => {
  let service: CComptabiliteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CComptabiliteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
