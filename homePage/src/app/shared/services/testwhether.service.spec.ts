import { TestBed } from '@angular/core/testing';

import { TestwhetherService } from './testwhether.service';

describe('TestwhetherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestwhetherService = TestBed.get(TestwhetherService);
    expect(service).toBeTruthy();
  });
});
