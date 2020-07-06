import { TestBed } from '@angular/core/testing';

import { HomestayService } from './homestay.service';

describe('HomestayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomestayService = TestBed.get(HomestayService);
    expect(service).toBeTruthy();
  });
});
