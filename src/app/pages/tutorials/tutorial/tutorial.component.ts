import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TutorialService } from './tutorial.service';
import { TutorialUtilsService } from '../tutorial-utils.service';

import { TutorialWrapperComponent } from './tutorial-wrapper/tutorial-wrapper.component';
import { CommonModule } from '@angular/common';
import { HeroTutorialListComponent } from './hero-tutorial-list/hero-tutorial-list.component';

@Component({
  selector: 'app-tutorial',
  standalone: true,
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss'],
  providers: [TutorialService],
  imports: [CommonModule, TutorialWrapperComponent, HeroTutorialListComponent]
})
export class TutorialComponent {
  tutorial: any = {};
  tutorialList: any[] = [];
  groupedCategories: { [key: string]: any[] } = {};
  categoriesId: string | null = null;
  tutorialId: string | null = null;

  stepIndexes: { [sectionId: string]: number } = {};
  activeSection: string = '';
  previousTutorial: any = null;
  nextTutorial: any = null;

  private scrollTimeout: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tutorialService: TutorialService,
    private tutorialUtils: TutorialUtilsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoriesId = params.get('categoriesId');
      this.tutorialId = params.get('tutorialId');

      if (this.categoriesId && this.tutorialId) {
        this.fetchData(this.categoriesId, this.tutorialId);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (this.categoriesId) {
        this.router.navigate(['/tutorials/' + this.categoriesId]);
      } else {
        this.router.navigate(['/tutorials/']);
      }
    });

    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  private fetchData(categoriesId: string, tutorialId: string): void {
    this.tutorialService.getCategoryList(categoriesId).subscribe(list => {
      this.tutorialList = list.tutorials;
      this.groupedCategories = this.tutorialUtils.groupCategoriesByType(this.tutorialList);

      const currentIndex = this.tutorialList.findIndex(t => t.href.endsWith(tutorialId));
      this.previousTutorial = this.tutorialList[currentIndex - 1] || null;
      this.nextTutorial = this.tutorialList[currentIndex + 1] || null;

      this.tutorialService.getCategoryData(categoriesId, tutorialId).subscribe(data => {
        this.tutorial = data;
      });
    });
  }

  slugify(text: string): string {
    return text.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
  }

  onScroll(): void {
    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      const sections = this.tutorial.sections || [];
      for (let section of sections) {
        const id = this.slugify(section.title);
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            this.activeSection = id;
            break;
          }
        }
      }
    }, 50);
  }

  startQuiz(tutorial: any): void {
    alert(`Starting quiz for: ${tutorial.title}\n(Not implemented yet)`);
  }
}
