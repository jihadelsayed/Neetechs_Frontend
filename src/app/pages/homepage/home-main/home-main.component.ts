import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-main',
  standalone: true,
  imports: [],
  templateUrl: './home-main.component.html',
  styleUrl: './home-main.component.scss'
})
export class HomeMainComponent {
  constructor(private router: Router) { }

  navigateTo(url: string): void {
    window.scrollTo(0, 0);

    this.router.navigate([url]);
  }
}
