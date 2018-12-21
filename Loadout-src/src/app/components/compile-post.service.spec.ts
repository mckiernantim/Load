import { TestBed } from '@angular/core/testing';

import { CompilePostService } from './compile-post.service';

describe('CompilePostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompilePostService = TestBed.get(CompilePostService);
    expect(service).toBeTruthy();
  });
});
