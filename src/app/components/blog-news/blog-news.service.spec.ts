import { TestBed } from '@angular/core/testing';

import { BlogNewsService } from './blog-news.service';

describe('BlogNewsService', () => {
  let service: BlogNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
