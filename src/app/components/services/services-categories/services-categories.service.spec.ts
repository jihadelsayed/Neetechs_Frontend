import { TestBed } from '@angular/core/testing';

import { ServicesCategoriesService } from './services-categories.service';

describe('ServicesCategoriesService', () => {
  let service: ServicesCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
