import { TestBed } from '@angular/core/testing';

import { TewshapeService } from './tewshape.service';

describe('TewshapeService', () => {
  let service: TewshapeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TewshapeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
