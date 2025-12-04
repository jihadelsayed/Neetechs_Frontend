// src/app/layouts/header/mobile-header/mobile-header.component.ts

import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PLATFORM_ID } from '@angular/core';

import { menu_data } from '../menu-data';
import { LanguageService } from '../../../core/language.service';
import { LogoutService } from '@/services/logout.service';

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

  isLoggedIn = false;

  constructor(
    private languageService: LanguageService,
    private logoutService: LogoutService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.menuOpen = false;

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('userToken');
      this.isLoggedIn = !!token;
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  navigateToTop() {
    window.scrollTo(0, 0);
    this.menuOpen = false;
  }

  goToAuth(mode: 'signIn' | 'signup') {
    this.menuOpen = false;

    if (!isPlatformBrowser(this.platformId)) return;

    const lang = this.languageService.getCurrentLanguage().toLowerCase();
    const langMap: Record<string, string> = {
      english: 'en',
      swedish: 'sv',
      عربي: 'ar',
    };
    const langSlug = langMap[lang] || 'en';

  const authPath = mode === 'signIn' ? 'login' : 'signup';
  const returnUrl = encodeURIComponent(window.location.href);

  const url =
    `https://accounts.neetechs.com/${langSlug}/${authPath}` +
    `?return_url=${returnUrl}`;

  window.location.href = url;
  }

  goToMyAccount() {
    this.menuOpen = false;

    if (!isPlatformBrowser(this.platformId)) return;

    window.location.href = 'https://myaccount.neetechs.com/';
  }

  logout() {
    this.menuOpen = false;
    this.logoutService.logout();
  }
}
