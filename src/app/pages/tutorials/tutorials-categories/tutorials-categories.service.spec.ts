import { TestBed } from '@angular/core/testing';

import { TutorialsCategoriesService } from './tutorials-categories.service';

describe('TutorialsCategoriesService', () => {
  let service: TutorialsCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TutorialsCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
