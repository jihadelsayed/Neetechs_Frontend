import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BlogNewsService } from './blog-news.service';

@Component({
  selector: 'app-blog-news',
  standalone: true,
  imports: [CommonModule,HttpClientModule ],
  templateUrl: './blog-news.component.html',
  styleUrl: './blog-news.component.scss',
  providers: [BlogNewsService]

})
export class BlogNewsComponent {
  blogData: any;

  constructor(private BlogNewsService: BlogNewsService) { }

  ngOnInit(): void {
    this.BlogNewsService.getBlogData().subscribe(data => {
      this.blogData = data.container;
    });
  }
}
