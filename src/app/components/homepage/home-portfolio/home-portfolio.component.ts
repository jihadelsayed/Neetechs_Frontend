import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PortfolioService } from './portfolio.service';
import { GenericSliderComponent } from '../../shared/generic-slider/generic-slider.component';

@Component({
  selector: 'app-home-portfolio',
  standalone: true,
  imports: [CommonModule, GenericSliderComponent],
  templateUrl: './home-portfolio.component.html',
  styleUrl: './home-portfolio.component.scss'
})
export class HomePortfolioComponent {

  projects: any = [];

  constructor(private portfolioService: PortfolioService) {}

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
}
