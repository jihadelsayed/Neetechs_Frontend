import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PortfolioService } from './portfolio.service';
import { GenericSliderComponent } from '../../../shared/generic-slider/generic-slider.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home-portfolio',
    imports: [CommonModule, GenericSliderComponent],
    templateUrl: './home-portfolio.component.html',
    styleUrl: './home-portfolio.component.scss'
})
export class HomePortfolioComponent {

  projects: any = [];

  constructor(private portfolioService: PortfolioService,        private router: Router
) {}

  ngOnInit() {
    if (this.projects.length === 0)
    {
      this.fetchData();

    }
  }

  fetchData() {
    this.portfolioService.getProjectsData().subscribe(data => {
       this.projects = data.projects;
    });
  }
        navigateTo(url: string): void {
      this.router.navigate([url]);
    }

}
