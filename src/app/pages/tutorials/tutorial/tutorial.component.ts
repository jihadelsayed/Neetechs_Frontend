import { CommonModule } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

import { TutorialService } from './tutorial.service';
import { TutorialUtilsService } from '../tutorial-utils.service';

import { TutorialWrapperComponent } from './tutorial-wrapper/tutorial-wrapper.component';
import { HeroTutorialListComponent } from './hero-tutorial-list/hero-tutorial-list.component';

@Component({
  selector: 'app-tutorial',
  standalone: true,
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss'],
  providers: [TutorialService],
  imports: [CommonModule, TutorialWrapperComponent, HeroTutorialListComponent],
})
export class TutorialComponent implements OnInit, OnDestroy {
  tutorial: any = {};
  tutorialList: any[] = [];
  groupedCategories: { [key: string]: any[] } = {};
  categoriesId: string | null = null;
  tutorialId: string | null = null;

  stepIndexes: { [sectionId: string]: number } = {};
  activeSection = '';
  previousTutorial: any = null;
  nextTutorial: any = null;

  private scrollTimeout: any;
  private scrollHandler = this.onScroll.bind(this);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tutorialService: TutorialService,
    private tutorialUtils: TutorialUtilsService,
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
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

    window.addEventListener('scroll', this.scrollHandler);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollHandler);
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
  }

  private fetchData(categoriesId: string, tutorialId: string): void {
    this.tutorialService.getCategoryList(categoriesId).subscribe((list) => {
      this.tutorialList = list.tutorials;
      this.groupedCategories =
        this.tutorialUtils.groupCategoriesByType(this.tutorialList);

      const currentIndex = this.tutorialList.findIndex((t) =>
        t.href?.endsWith(tutorialId)
      );
      this.previousTutorial = this.tutorialList[currentIndex - 1] || null;
      this.nextTutorial = this.tutorialList[currentIndex + 1] || null;

      this.tutorialService
        .getCategoryData(categoriesId, tutorialId)
        .subscribe((data) => {
          this.tutorial = data;
          this.setSeoForTutorial();
        });
    });
  }

  private setSeoForTutorial(): void {
    if (!this.tutorial) return;

    const fallbackTitle = this.tutorial.title || 'Tutorial';
    const seo = this.tutorial.seo || {};

    const pageTitle =
      seo.title || `${fallbackTitle} | Neetechs Tutorials`;

    const description =
      seo.description ||
      (this.tutorial.summary as string) ||
      'Learn step-by-step with this Neetechs tutorial.';

    const canonical =
      seo.canonicalUrl ||
      (this.categoriesId && this.tutorialId
        ? `https://neetechs.com/en/tutorials/${this.categoriesId}/${this.tutorialId}`
        : 'https://neetechs.com/en/tutorials');

    const rawImage: string | undefined = this.tutorial.image;
    const imageUrl = rawImage
      ? rawImage.startsWith('http')
        ? rawImage
        : `https://neetechs.com${rawImage}`
      : 'https://neetechs.com/assets/og/default-tutorial.png';

    // Basic SEO
    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: 'index,follow' });

    // Canonical
    let link: HTMLLinkElement | null = this.document.querySelector(
      "link[rel='canonical']"
    );
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', canonical);

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:url', content: canonical });
    this.meta.updateTag({ property: 'og:image', content: imageUrl });

    // Twitter
    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    this.meta.updateTag({ name: 'twitter:title', content: pageTitle });
    this.meta.updateTag({
      name: 'twitter:description',
      content: description,
    });
    this.meta.updateTag({ name: 'twitter:image', content: imageUrl });
  }

  slugify(text: string): string {
    return text
      .toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-');
  }

  onScroll(): void {
    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      const sections = this.tutorial.sections || [];
      for (const section of sections) {
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
    alert(
      `Starting quiz for: ${tutorial.title}\n(Not implemented yet)`
    );
  }
}
