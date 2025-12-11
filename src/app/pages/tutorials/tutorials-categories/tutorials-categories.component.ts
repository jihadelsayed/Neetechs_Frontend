import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TutorialsCategoriesService } from './tutorials-categories.service';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

interface TutorialListItem {
  id: number;
  title: string;
  lvl: string;
  date?: string;
  href?: string;
  description?: string;
  duration?: string;
  disable?: boolean | string;
  tag?: string;
  image?: string;
}

interface TutorialCategory {
  id: string;
  name: string;
  date?: string;
  href: string;
  description?: string;
  tagline?: string;
  image?: string;
  tutorials: TutorialListItem[];
}

@Component({
  selector: 'app-tutorials-categories',
  standalone: true,
  templateUrl: './tutorials-categories.component.html',
  styleUrl: './tutorials-categories.component.scss',
  imports: [CommonModule, HttpClientModule],
  providers: [TutorialsCategoriesService],
})
export class TutorialsCategoriesComponent {

  levels: string[] = [];
  activeLevel: string | null = null;

  private completedIds = new Set<string>();
  category: TutorialCategory | null = null;
  groupedTutorials: Record<string, TutorialListItem[]> = {};


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tutorialsCategoriesService: TutorialsCategoriesService,
      private title: Title,
  private meta: Meta,
    @Inject(DOCUMENT) private document: Document

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
      this.setSeoForCategory();
      }
    );
  }
private setSeoForCategory(): void {
  if (!this.category) return;

  const baseTitle = this.category.name || 'Tutorials';
  const pageTitle = `${baseTitle} Tutorials | Neetechs`;

  const description =
    this.category.description ||
    `Learn ${this.category.name} step-by-step with structured tutorials on Neetechs.`;

  const path = this.category.href || `tutorials/${this.slugify(baseTitle)}`;
  const url = `https://neetechs.com/en/${path}`;

  // Make sure image is absolute for OG/Twitter
  const rawImage = this.category.image as string | undefined;
  const imageUrl = rawImage
    ? (rawImage.startsWith('http')
        ? rawImage
        : `https://neetechs.com${rawImage}`)
    : 'https://neetechs.com/assets/og/default-category.png';

  /* === BASIC SEO === */
  this.title.setTitle(pageTitle);

  this.meta.updateTag({
    name: 'description',
    content: description
  });

  this.meta.updateTag({
    name: 'robots',
    content: 'index,follow'
  });

  /* === CANONICAL === */
  let link: HTMLLinkElement | null = this.document.querySelector(
    "link[rel='canonical']"
  );
  if (!link) {
    link = this.document.createElement('link');
    link.setAttribute('rel', 'canonical');
    this.document.head.appendChild(link);
  }
  link.setAttribute('href', url);

  /* === OPEN GRAPH === */
  this.meta.updateTag({ property: 'og:title', content: pageTitle });
  this.meta.updateTag({ property: 'og:description', content: description });
  this.meta.updateTag({ property: 'og:type', content: 'website' });
  this.meta.updateTag({ property: 'og:url', content: url });
  this.meta.updateTag({ property: 'og:image', content: imageUrl });

  /* === TWITTER === */
  this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
  this.meta.updateTag({ name: 'twitter:title', content: pageTitle });
  this.meta.updateTag({ name: 'twitter:description', content: description });
  this.meta.updateTag({ name: 'twitter:image', content: imageUrl });
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
isDisabled(tutorial: any): boolean {
  return tutorial.disable === true || tutorial.disable === 'true';
}

onTutorialClick(tutorial: any): void {
  if (this.isDisabled(tutorial)) return;
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
    (sum, lvl) =>
      sum +
      (this.groupedTutorials[lvl]?.filter(t => !this.isDisabled(t)).length || 0),
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
