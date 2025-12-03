// src/app/layouts/header/header.component.ts

import {
  Component,
  HostListener,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MobileHeaderComponent } from './mobile-header/mobile-header.component';
import { DesktopHeaderComponent } from './desktop-header/desktop-header.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    CommonModule,
    RouterModule,
    MobileHeaderComponent,
    DesktopHeaderComponent,
  ],
})
export class HeaderComponent {
  isMobile = false;
  headerSticky = false;

  private scrollTimeout: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  private checkWindowSize(width: number) {
    this.isMobile = width <= 640;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (!isPlatformBrowser(this.platformId)) return;
    this.checkWindowSize(event.target.innerWidth);
  }

  @HostListener('window:scroll')
  onScroll() {
    if (!isPlatformBrowser(this.platformId)) return;

    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      this.headerSticky = window.scrollY > 180;
    }, 50);
  }

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    if (window.innerWidth) {
      this.checkWindowSize(window.innerWidth);
    }
  }
}
