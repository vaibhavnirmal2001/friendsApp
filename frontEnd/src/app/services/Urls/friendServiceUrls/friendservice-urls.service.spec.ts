import { TestBed } from '@angular/core/testing';

import { FriendserviceUrlsService } from './friendservice-uels.service';

describe('FriendserviceUelsService', () => {
  let service: FriendserviceUrlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FriendserviceUrlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
