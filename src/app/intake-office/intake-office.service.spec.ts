import { TestBed, inject } from '@angular/core/testing';

import { IntakeOfficeService } from './intake-office.service';

describe('IntakeOfficeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IntakeOfficeService]
    });
  });

  it('should be created', inject([IntakeOfficeService], (service: IntakeOfficeService) => {
    expect(service).toBeTruthy();
  }));
});
