import { TestBed } from '@angular/core/testing';

import { SelectorService } from './selector.service';

describe('SelectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectorService = TestBed.get(SelectorService);
    expect(service).toBeTruthy();
  });
});
