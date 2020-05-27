import { TestBed } from '@angular/core/testing';

import { MediumformService } from './mediumform.service';

describe('MediumformService', () => {
  let service: MediumformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediumformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
