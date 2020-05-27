import { TestBed } from '@angular/core/testing';

import { EasyformService } from './easyform.service';

describe('EasyformService', () => {
  let service: EasyformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EasyformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
