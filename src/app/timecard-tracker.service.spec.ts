import { TestBed } from '@angular/core/testing';

import { TimecardTrackerService } from './timecard-tracker.service';

describe('TimecardTrackerService', () => {
  let service: TimecardTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimecardTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
