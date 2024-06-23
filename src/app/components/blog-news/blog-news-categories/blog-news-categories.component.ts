import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-news-categories',
  standalone: true,
  imports: [CommonModule,HttpClientModule ],
  templateUrl: './blog-news-categories.component.html',
  styleUrl: './blog-news-categories.component.scss'
})
export class BlogNewsCategoriesComponent {

}
