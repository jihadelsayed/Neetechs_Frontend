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
  providers: [TutorialsCategoriesService],
})
export class TutorialsCategoriesComponent {
  category: any;
  groupedTutorials: Record<string, any[]> = {};
  levels: string[] = [];
  activeLevel: string | null = null;

  private completedIds = new Set<string>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tutorialsCategoriesService: TutorialsCategoriesService
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
    this.tutorialsCategoriesService.getCategoryData(categoriesId).subscribe(
      (data) => {
        this.category = data;
        this.groupTutorialsByLevel();
      }
    );
  }

  private groupTutorialsByLevel(): void {
    this.groupedTutorials = {};
    if (!this.category?.tutorials) return;

    this.category.tutorials.forEach((tutorial: any) => {
      const level = tutorial.lvl || 'Other';
      if (!this.groupedTutorials[level]) {
        this.groupedTutorials[level] = [];
      }
      this.groupedTutorials[level].push(tutorial);
    });

    this.levels = Object.keys(this.groupedTutorials);
  }

  /* ==== NAVIGATION ==== */

  navigateTo(url: string): void {
    this.router.navigate([url]);
  }

  onTutorialClick(tutorial: any): void {
    if (tutorial.disable) return;
    if (tutorial.href) {
      this.router.navigate([tutorial.href]);
    }
  }

  setActiveLevel(level: string | null): void {
    this.activeLevel = level;
  }

  slugify(text: string): string {
    return text
      .toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-');
  }

  /* ==== LEVEL / BADGE HELPERS ==== */

  levelClass(level: string): string {
    const l = level.toLowerCase();
    if (l.includes('intro')) return 'level-intro';
    if (l.includes('fund') || l.includes('basic')) return 'level-basics';
    if (l.includes('advanced')) return 'level-advanced';
    if (l.includes('project') || l.includes('script')) return 'level-projects';
    if (l.includes('bonus')) return 'level-bonus';
    return '';
  }

  /* ==== PROGRESS + METRICS ==== */

  private tutorialId(tutorial: any): string {
    // adjust to whatever you have in backend later
    return tutorial.id || tutorial.slug || tutorial.title;
  }

  isCompleted(tutorial: any): boolean {
    return this.completedIds.has(this.tutorialId(tutorial));
  }

  toggleCompleted(tutorial: any, event: MouseEvent): void {
    event.stopPropagation();
    const id = this.tutorialId(tutorial);

    if (this.completedIds.has(id)) {
      this.completedIds.delete(id);
    } else {
      this.completedIds.add(id);
    }
  }

  get totalTutorials(): number {
    return this.levels.reduce(
      (sum, lvl) => sum + (this.groupedTutorials[lvl]?.length || 0),
      0
    );
  }

  get completedCount(): number {
    return this.completedIds.size;
  }

  get completionPercent(): number {
    if (!this.totalTutorials) return 0;
    return Math.round((this.completedCount / this.totalTutorials) * 100);
  }
}
