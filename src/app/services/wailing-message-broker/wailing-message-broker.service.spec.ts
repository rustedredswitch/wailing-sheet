import { TestBed } from '@angular/core/testing';

import { WailingMessageBrokerService } from './wailing-message-broker.service';

describe('WailingMessageBrokerService', () => {
  let service: WailingMessageBrokerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WailingMessageBrokerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
