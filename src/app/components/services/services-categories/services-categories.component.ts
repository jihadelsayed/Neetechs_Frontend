import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServicesCategoriesService } from './services-categories.service';

@Component({
    selector: 'app-services-categories',
    imports: [CommonModule],
    providers: [ServicesCategoriesService],
    templateUrl: './services-categories.component.html',
    styleUrl: './services-categories.component.scss'
})
export class ServicesCategoriesComponent {
  category: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ServicesCategoriesService: ServicesCategoriesService
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
    this.ServicesCategoriesService.getServicesCategoriesData(categoriesId).subscribe(
      (data) => {
        this.category = data;
      }
    );
  }
  navigateTo(url: string): void {
    this.router.navigate([url]);
  }
}
