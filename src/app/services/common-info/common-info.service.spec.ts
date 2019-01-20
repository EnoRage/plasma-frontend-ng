import { TestBed } from '@angular/core/testing';

import { CommonInfoService } from './common-info.service';

describe('CommonInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonInfoService = TestBed.get(CommonInfoService);
    expect(service).toBeTruthy();
  });
});
