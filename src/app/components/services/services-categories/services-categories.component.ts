import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
 import { TutorialsCategoriesService } from '../../tutorials/tutorials-categories/tutorials-categories.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-categories',
  standalone: true,
  imports: [CommonModule],
  providers: [TutorialsCategoriesService],
  templateUrl: './services-categories.component.html',
  styleUrl: './services-categories.component.scss'
})
export class ServicesCategoriesComponent {
  category: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private TutorialsCategoriesService: TutorialsCategoriesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const categoriesId = params.get('categoriesId');
      if (categoriesId) {
        this.fetchData(categoriesId);
      }
    });
  }

  private fetchData(categoriesId: string): void {
    this.TutorialsCategoriesService.getCategoryData(categoriesId).subscribe(
      (data) => {
        this.category = data;
      }
    );
  }
  navigateTo(url: string): void {
    this.router.navigate([url]);
  }
}
