import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { BlogNewsCategoriesService } from './blog-news-categories.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-blog-news-categories',
    imports: [CommonModule, HttpClientModule],
    templateUrl: './blog-news-categories.component.html',
    styleUrl: './blog-news-categories.component.scss',
    providers: [BlogNewsCategoriesService]
})
export class BlogNewsCategoriesComponent {
  category: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private BlogNewsCategoriesService: BlogNewsCategoriesService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const categoriesId = params.get('categoriesId');
      if (categoriesId) {
        this.fetchData(categoriesId);
      }
    });
  }

  private fetchData(categoriesId: string): void {
    this.BlogNewsCategoriesService.getCategoryData(categoriesId).subscribe(data => {
      this.category = data;
    });
  }

  navigateTo(url: string): void {
    this.router.navigate([url]);
  }
}
