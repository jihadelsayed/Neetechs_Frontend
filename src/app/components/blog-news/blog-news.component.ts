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
  title: string | undefined;
  description: string | undefined;
  image: string | undefined;
  posts: any[] | undefined;

  constructor(private BlogNewsService: BlogNewsService) { }

  ngOnInit(): void {
    this.BlogNewsService.getBlogData().subscribe(data => {
      if (data && data.container) {
        this.blogData = data.container;
        this.title = this.blogData.title;
        this.description = this.blogData.description;
        this.image = this.blogData.image;
        this.posts = this.blogData.posts;
      } else {
        console.error('Data container is undefined or null');
      }
        });
  }
}
