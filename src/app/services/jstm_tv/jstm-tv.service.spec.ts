import { TestBed } from '@angular/core/testing';

import { JstmTvService } from './jstm-tv.service';

describe('JstmTvService', () => {
  let service: JstmTvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JstmTvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
