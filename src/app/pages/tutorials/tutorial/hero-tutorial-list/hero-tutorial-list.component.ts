// FILE: hero-tutorial-list.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-tutorial-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero-tutorial-list.component.html',
  styleUrls: ['./hero-tutorial-list.component.scss']
})
export class HeroTutorialListComponent {
    constructor(private router: Router) {}
  @Input() tutorial: any;
  @Input() tutorialList: any[] = [];
  @Input() groupedCategories: { [key: string]: any[] } = {};

  getTypes(): string[] {
    return Object.keys(this.groupedCategories);
  }
    navigateTo(url: string): void {
    this.router.navigate([url]);
  }
}
