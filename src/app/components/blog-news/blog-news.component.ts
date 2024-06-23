import { Component } from '@angular/core';
import { BlogService } from './blog.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-blog-news',
  standalone: true,
  imports: [CommonModule,HttpClientModule ],
  templateUrl: './blog-news.component.html',
  styleUrl: './blog-news.component.scss',
  providers: [BlogService]

})
export class BlogNewsComponent {
  blogData: any;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getBlogData().subscribe(data => {
      this.blogData = data.container;
    });
  }
}
