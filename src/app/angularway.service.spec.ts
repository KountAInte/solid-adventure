import { TestBed, inject } from '@angular/core/testing';

import { AngularwayService } from './angularway.service';

describe('AngularwayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularwayService]
    });
  });

  it('should be created', inject([AngularwayService], (service: AngularwayService) => {
    expect(service).toBeTruthy();
  }));
});
