import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from './blog.service';

@Component({
    selector: 'app-blog',
    imports: [CommonModule, HttpClientModule],
    templateUrl: './blog.component.html',
    styleUrl: './blog.component.scss',
    providers: [BlogService]
})
export class BlogComponent {
  Blog: any;
  categoriesId: string | null = null;
  blogId: string | null = null;
  constructor(private route: ActivatedRoute,private router: Router, private BlogService: BlogService) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoriesId = params.get('categoriesId');
      this.blogId = params.get('blogId');

      if (this.categoriesId && this.blogId) {
        this.fetchData(this.categoriesId,this.blogId);
      }else if(this.categoriesId){
        this.router.navigate(['/blog/'+this.categoriesId]);
      }else{
        this.router.navigate(['/blog/']);
      }
    });
  }

  private fetchData(categoriesId: string, blogId: string): void {
    this.BlogService.getCategoryData(categoriesId, blogId).subscribe((data: any) => {
      this.Blog = data;
    });
  }
  navigateTo(url: string): void {
    this.router.navigate([url]);
  }
  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(function() {
      alert('Code copied to clipboard!');
    });
  }
}
