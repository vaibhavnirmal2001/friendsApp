import { TestBed } from '@angular/core/testing';

import { TestTempService } from './test-temp-Urls.service';

describe('TestTempService', () => {
  let service: TestTempService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestTempService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
