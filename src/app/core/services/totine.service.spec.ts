import { TestBed } from '@angular/core/testing';

import { TotineService } from './totine.service';

describe('TotineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TotineService = TestBed.get(TotineService);
    expect(service).toBeTruthy();
  });
});
