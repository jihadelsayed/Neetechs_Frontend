import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services-hero',
  standalone: true,
  imports: [],
  templateUrl: './services-hero.component.html',
  styleUrl: './services-hero.component.scss'
})
export class ServicesHeroComponent {
       navigateTo(url: string): void {
      this.router.navigate([url]);
    }
    constructor(
        private router: Router
    ) {
      // Initialization logic if needed
  
    }
}
