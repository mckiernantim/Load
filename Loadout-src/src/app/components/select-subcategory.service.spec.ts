import { TestBed } from '@angular/core/testing';

import { SelectSubcategoryService } from './select-subcategory.service';

describe('SelectSubcategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectSubcategoryService = TestBed.get(SelectSubcategoryService);
    expect(service).toBeTruthy();
  });
});
