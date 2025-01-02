import { TestBed } from '@angular/core/testing';

import { ItuneApiService } from './itune-api.service';

describe('ItuneApiService', () => {
  let service: ItuneApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItuneApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
