import { TestBed } from '@angular/core/testing';

import { SickinfoService } from './sickinfo.service';

describe('SickinfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SickinfoService = TestBed.get(SickinfoService);
    expect(service).toBeTruthy();
  });
});
