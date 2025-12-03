// src/app/layouts/header/desktop-header/desktop-header.component.ts

import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PLATFORM_ID } from '@angular/core';

import { menu_data } from '../menu-data';
import { LanguageService } from '../../../core/language.service';
import { LogoutService } from '@/services/logout.service';

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

  constructor(
    private languageService: LanguageService,
    private logoutService: LogoutService,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // unified auth key from Phase 1
      const token = localStorage.getItem('userToken');
      this.isLoggedIn = !!token;
    }
  }

  navigateToTop() {
    window.scrollTo(0, 0);
  }

  toggleAccountDropdown() {
    this.isSettingsActive = !this.isSettingsActive;
  }

  goToAuth(mode: 'signIn' | 'signup') {
    this.isSettingsActive = false;

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const lang = this.languageService.getCurrentLanguage().toLowerCase();

    const langMap: { [key: string]: string } = {
      english: 'en',
      swedish: 'sv',
      عربي: 'ar',
    };

    const langSlug = langMap[lang] || 'en';

    // send user to accounts portal with return_url back to current page
const authPath = mode === 'signIn' ? 'login' : 'signup';
const url = `https://accounts.neetechs.com/${langSlug}/${authPath}?return_url=${encodeURIComponent(window.location.href)}`;


    window.location.href = url;
  }

  logout() {
    this.isSettingsActive = false;
    this.logoutService.logout(); // centralized logout: clears LS + cookies + redirects
  }
}
