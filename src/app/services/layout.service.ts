import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  private showShopHeaderSubject = new BehaviorSubject<boolean>(false);
  showShopHeader$ = this.showShopHeaderSubject.asObservable();

  constructor(private router: Router) {
    this.updateState(this.router.url);
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(e => this.updateState(e.urlAfterRedirects));
  }

  private updateState(url: string): void {
    const isShop = url.startsWith('/shop') ||
                   url.startsWith('/cart') ||
                   url.startsWith('/checkout') ||
                   url.includes('/shop/product');
    this.showShopHeaderSubject.next(isShop);
  }
}
