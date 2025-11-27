// desktop-header.component.ts

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { menu_data } from '../menu-data';

@Component({
  selector: 'app-desktop-header',
  standalone: true,
  templateUrl: './desktop-header.component.html',
  styleUrl: './desktop-header.component.scss',
  imports: [CommonModule, RouterModule],
})
export class DesktopHeaderComponent {
  public menu_data: any[] = menu_data;

  isLoggedIn = false;
  isSettingsActive = false;

  constructor(private router: Router) {}

  navigateToTop() {
    window.scrollTo(0, 0);
  }

  toggleAccountDropdown() {
    this.isSettingsActive = !this.isSettingsActive;
  }

  goToAuth(mode: 'signIn' | 'signup') {
    this.isSettingsActive = false;
    this.router.navigate(['/auth'], { queryParams: { mode } });
  }

  logout() {
    localStorage.removeItem('userInfo');
    this.isLoggedIn = false;
    this.isSettingsActive = false;
    this.router.navigate(['/']);
  }

  ngOnInit() {
    const userInfoString =
      typeof localStorage !== 'undefined'
        ? localStorage.getItem('userInfo')
        : null;
    this.isLoggedIn = !!userInfoString;
  }
}
