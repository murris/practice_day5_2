import { TestBed } from '@angular/core/testing';

import { AppTreeService } from './app-tree.service';

describe('AppTreeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppTreeService = TestBed.get(AppTreeService);
    expect(service).toBeTruthy();
  });
});
