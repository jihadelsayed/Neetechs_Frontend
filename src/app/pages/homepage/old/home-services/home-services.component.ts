import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home-services',
    imports: [],
    templateUrl: './home-services.component.html',
    styleUrl: './home-services.component.scss'
})
export class HomeServicesComponent {
      navigateTo(url: string): void {
    this.router.navigate([url]);
  }
  constructor(
      private router: Router
  ) {
    // Initialization logic if needed

  }
}
