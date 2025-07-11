import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TutorialService } from './tutorial.service';
import { TutorialAdsComponent } from "../tutorial-ads/tutorial-ads.component";
import { SafePipe } from "./safe.pipe";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { KatexComponent } from "./katex/katex.component";



// math 
@Component({
    selector: 'app-tutorial',
    templateUrl: './tutorial.component.html',
    styleUrl: './tutorial.component.scss',
    providers: [TutorialService],
      standalone: true,

    imports: [CommonModule, HttpClientModule, TutorialAdsComponent, SafePipe, NgxChartsModule, KatexComponent]
})
export class TutorialComponent {
  tutorial: any = {};
  categoriesId: string | null = null;
  tutorialId: string | null = null;
  constructor(private route: ActivatedRoute,private router: Router, private TutorialService: TutorialService) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoriesId = params.get('categoriesId');
      this.tutorialId = params.get('tutorialId');

      if (this.categoriesId && this.tutorialId) {
        this.fetchData(this.categoriesId,this.tutorialId);
      }else if(this.categoriesId){
        this.router.navigate(['/tutorials/'+this.categoriesId]);
      }else{
        this.router.navigate(['/tutorials/']);
      }
    });
  }

  private fetchData(categoriesId: string, tutorialId: string): void {
    this.TutorialService.getCategoryData(categoriesId, tutorialId).subscribe(data => {
      this.tutorial = data;
    });
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

}
