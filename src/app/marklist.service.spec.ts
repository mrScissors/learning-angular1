import { TestBed } from '@angular/core/testing';

import { MarklistService } from './marklist.service';

describe('MarklistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarklistService = TestBed.get(MarklistService);
    expect(service).toBeTruthy();
  });
});
