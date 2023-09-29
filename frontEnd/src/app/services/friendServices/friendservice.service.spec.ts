import { TestBed } from '@angular/core/testing';

import { FriendserviceService } from './friendservice.service';

describe('FriendserviceService', () => {
  let service: FriendserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FriendserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
