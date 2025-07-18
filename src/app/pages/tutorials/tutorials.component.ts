import { Component } from '@angular/core';
import { TutorialService } from './tutorials.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ContactBannerComponent } from '../../shared/contact-banner/contact-banner.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-tutorials',
    templateUrl: './tutorials.component.html',
    styleUrl: './tutorials.component.scss',
    providers: [TutorialService],
    imports: [CommonModule, HttpClientModule, ContactBannerComponent]
})
export class TutorialsComponent {
  tutorialData: any;
  groupedCategories: { [key: string]: any[] } = {};

  constructor(private tutorialService: TutorialService,
      private router: Router) { }

  ngOnInit(): void {
    this.tutorialService.getTutorialData().subscribe(data => {
      this.tutorialData = data.container;
      this.groupCategoriesByType();
    });
  }

  groupCategoriesByType(): void {
    if (this.tutorialData && this.tutorialData.categories) {
      this.groupedCategories = this.tutorialData.categories.reduce((groups: any, category: any) => {
        const type = category.type;
        if (!groups[type]) {
          groups[type] = [];
        }
        groups[type].push(category);
        return groups;
      }, {});
    }
  }
  getTypes(): string[] {
    return Object.keys(this.groupedCategories);
  }
    navigateTo(url: string): void {
    this.router.navigate([url]);
  }
}
