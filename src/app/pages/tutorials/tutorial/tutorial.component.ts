import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TutorialService } from './tutorial.service';
import { TutorialAdsComponent } from "../tutorial-ads/tutorial-ads.component";
import { SafePipe } from "./safe.pipe";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { KatexComponent } from "./katex/katex.component";
import { TutorialUtilsService } from '../tutorial-utils.service';



// math 
@Component({
    selector: 'app-tutorial',
    templateUrl: './tutorial.component.html',
    styleUrl: './tutorial.component.scss',
    providers: [TutorialService],
      standalone: true,

    imports: [CommonModule, HttpClientModule, TutorialAdsComponent, SafePipe, NgxChartsModule, KatexComponent,RouterModule]
})
export class TutorialComponent {
  groupedCategories: { [key: string]: any[] } = {};
activeSection: string = '';

  tutorial: any = {};
  categoriesId: string | null = null;
  tutorialId: string | null = null;
  constructor(private route: ActivatedRoute,private router: Router, private TutorialService: TutorialService,
  private tutorialUtils: TutorialUtilsService ) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoriesId = params.get('categoriesId');
      this.tutorialId = params.get('tutorialId');

      if (this.categoriesId && this.tutorialId) {
        this.fetchData(this.categoriesId,this.tutorialId);
              window.scrollTo({ top: 0, behavior: 'smooth' }); 
      }else if(this.categoriesId){
        this.router.navigate(['/tutorials/'+this.categoriesId]);
      }else{
        this.router.navigate(['/tutorials/']);
      }
    });
  }
  ngAfterViewInit(): void {
  window.addEventListener('scroll', this.onScroll.bind(this));
}
scrollTimeout: any;

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

tutorialList: any[] = [];
currentIndex: number = -1;
previousTutorial: any = null;
nextTutorial: any = null;

private fetchData(categoriesId: string, tutorialId: string): void {
 this.TutorialService.getCategoryList(categoriesId).subscribe(list => {
  this.tutorialList = list.tutorials;
  this.groupedCategories = this.tutorialUtils.groupCategoriesByType(this.tutorialList);

  this.currentIndex = this.tutorialList.findIndex(t => t.href.endsWith(tutorialId));
  this.previousTutorial = this.tutorialList[this.currentIndex - 1] || null;
  this.nextTutorial = this.tutorialList[this.currentIndex + 1] || null;

  this.TutorialService.getCategoryData(categoriesId, tutorialId).subscribe(data => {
    this.tutorial = data;
  });
});

}
slugify(text: string): string {
  return text.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
}


  navigateTo(url: string): void {
    this.router.navigate([url]);
  }
  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(function() {
      alert('Code copied to clipboard!');
    });
  }

colorScheme:any = {
  domain: ['#f7931a', '#3366cc', '#dc3912']
};
getTypes(): string[] {
  return this.tutorialUtils.getTypes(this.groupedCategories);
}
scrollToSection(title: string): void {
  const id = this.slugify(title);
  const el = document.getElementById(id);
  if (el) {
    const yOffset = -80; // adjust based on your fixed nav/header height
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    this.activeSection = id;
  }
}
getEstimatedReadingTime(): string {
  if (!this.tutorial?.sections) return '';
  const allText = this.tutorial.sections.map((s: any) => s.content || '').join(' ');
  const words = allText.split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 100)); // avg 200 WPM
  return `${minutes} min read`;
}

startQuiz(section: any): void {
  alert(`Starting quiz for: ${section.title}\n(Not implemented yet)`);
}
isCompleted(): boolean {
  const key = `tutorial-completed-${this.tutorialId}`;
  return localStorage.getItem(key) === 'true';
}

toggleCompletion(): void {
  const key = `tutorial-completed-${this.tutorialId}`;
  const current = this.isCompleted();
  localStorage.setItem(key, (!current).toString());
}

}
