import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SafePipe } from '../safe.pipe';
import { TutorialAdsComponent } from '../../tutorial-ads/tutorial-ads.component';
import { TutorialNavigationComponent } from '../tutorial-navigation/tutorial-navigation.component';
import { TutorialSectionComponent } from '../tutorial-section/tutorial-section.component';
import { TutorialTOCComponent } from '../tutorial-toc/tutorial-toc.component';

@Component({
  selector: 'app-tutorial-wrapper',
  standalone: true,
  imports: [
    CommonModule,
    SafePipe,
    TutorialTOCComponent,
    TutorialSectionComponent,
    TutorialNavigationComponent,
    TutorialAdsComponent,
  ],
  templateUrl: './tutorial-wrapper.component.html',
  styleUrls: ['./tutorial-wrapper.component.scss']
})
export class TutorialWrapperComponent {
  @Input() tutorial: any = {};
  @Input() previousTutorial: any = null;
  @Input() nextTutorial: any = null;

  @Input() activeSection: string = '';
  @Input() stepIndexes: { [key: string]: number } = {};

  @Output() startQuiz = new EventEmitter<any>();

 


  scrollToSection(title: string) {
    const id = this.slugify(title);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  slugify(text: string): string {
    return text.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
  }

  nextStep(sectionId: string) {
    this.stepIndexes[sectionId] = (this.stepIndexes[sectionId] || 0) + 1;
  }

  getEstimatedReadingTime(): string {
    if (!this.tutorial?.sections) return '';
    const allText = this.tutorial.sections.map((s: any) => s.content || '').join(' ');
    const words = allText.split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(words / 100));
    return `${minutes} min read`;
  }

  isCompleted(): boolean {
    const key = `tutorial-completed-${this.tutorial?.id}`;
    return localStorage.getItem(key) === 'true';
  }

  toggleCompletion(): void {
    const key = `tutorial-completed-${this.tutorial?.id}`;
    const current = this.isCompleted();
    localStorage.setItem(key, (!current).toString());
  }
}
