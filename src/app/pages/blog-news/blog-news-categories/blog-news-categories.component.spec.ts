import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogNewsCategoriesComponent } from './blog-news-categories.component';

describe('BlogNewsCategoriesComponent', () => {
  let component: BlogNewsCategoriesComponent;
  let fixture: ComponentFixture<BlogNewsCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogNewsCategoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogNewsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
