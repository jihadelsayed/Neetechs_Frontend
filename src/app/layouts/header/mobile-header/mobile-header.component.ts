import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { menu_data } from '../menu-data';

@Component({
  selector: 'app-mobile-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.scss'],
})
export class MobileHeaderComponent {
  menuOpen = false;
  public menu_data: any[] = menu_data;

  constructor(private router: Router) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  navigateToTop() {
    window.scrollTo(0, 0);
    this.menuOpen = false;
  }

  goToAuth(mode: 'signIn' | 'signup') {
    this.menuOpen = false;
    this.router.navigate(['/auth'], { queryParams: { mode } });
  }

  ngOnInit() {
    this.menuOpen = false;
  }
}
