import { TestBed } from '@angular/core/testing';

import { NdbService } from './ndb.service';

describe('NdbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NdbService = TestBed.get(NdbService);
    expect(service).toBeTruthy();
  });
});
