import { TestBed } from '@angular/core/testing';

import { CAnneeScolaireServiceService } from './c-annee-scolaire-service.service';

describe('CAnneeScolaireServiceService', () => {
  let service: CAnneeScolaireServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CAnneeScolaireServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
