import { TestBed } from '@angular/core/testing';

import { WailingImporterV1Service } from './wailing-importer-v1.service';

describe('WailingImporterV1Service', () => {
  let service: WailingImporterV1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WailingImporterV1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
