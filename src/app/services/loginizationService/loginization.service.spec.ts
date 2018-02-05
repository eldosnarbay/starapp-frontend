import { TestBed, inject } from '@angular/core/testing';

import { LoginizationService } from './loginization.service';

describe('LoginizationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginizationService]
    });
  });

  it('should be created', inject([LoginizationService], (service: LoginizationService) => {
    expect(service).toBeTruthy();
  }));
});
