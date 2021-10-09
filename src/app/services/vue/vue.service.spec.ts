import { TestBed } from '@angular/core/testing';

import { VueService } from './vue.service';

describe('VueService', () => {
  let service: VueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
