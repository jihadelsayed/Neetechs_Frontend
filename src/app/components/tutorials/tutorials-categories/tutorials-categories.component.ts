import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TutorialsCategoriesService } from './tutorials-categories.service';

@Component({
    selector: 'app-tutorials-categories',
    standalone: true,
    templateUrl: './tutorials-categories.component.html',
    styleUrl: './tutorials-categories.component.scss',
    imports: [CommonModule, HttpClientModule],
    providers: [TutorialsCategoriesService]

})
export class TutorialsCategoriesComponent {
  category: any;
  groupedTutorials: any = {};

  constructor(private route: ActivatedRoute,private router: Router, private TutorialsCategoriesService: TutorialsCategoriesService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const categoriesId = params.get('categoriesId');
      if (categoriesId) {
        this.fetchData(categoriesId);

      }
    });


  }

  private fetchData(categoriesId: string): void {
    this.TutorialsCategoriesService.getCategoryData(categoriesId).subscribe(data => {
      this.category = data;
      this.groupTutorialsByLevel();

    });
  }
  navigateTo(url: string): void {
    this.router.navigate([url]);
  }
  groupTutorialsByLevel() {
    this.category.tutorials.forEach((tutorial: any) => {
      if (!this.groupedTutorials[tutorial.lvl]) {
        this.groupedTutorials[tutorial.lvl] = [];
      }
      this.groupedTutorials[tutorial.lvl].push(tutorial);
    });
  }

  getLevels(): string[] {
    return this.groupedTutorials ? Object.keys(this.groupedTutorials) : [];
  }
}
