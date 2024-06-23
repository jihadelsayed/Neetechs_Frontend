import { TestBed } from '@angular/core/testing';

import { BlogNewsCategoriesService } from './blog-news-categories.service';

describe('BlogNewsCategoriesService', () => {
  let service: BlogNewsCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogNewsCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
