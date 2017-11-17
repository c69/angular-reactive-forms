import { TestBed, inject } from '@angular/core/testing';

import { MockDataService } from './mock-data.service';

describe('MockDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockDataService]
    });
  });

  it('should be created', inject([MockDataService], (service: MockDataService) => {
    expect(service).toBeTruthy();
  }));
});
