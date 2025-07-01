import { Component } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { ShopHeaderComponent } from './store/shop-header/shop-header.component';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, ShopHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'neetechs';
  showShopHeader = false;

  constructor(private router: Router) {
    this.showShopHeader = this.isShopRoute(this.router.url);
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(e => {
        this.showShopHeader = this.isShopRoute(e.urlAfterRedirects);
      });
  }

  private isShopRoute(url: string): boolean {
    return (
      url.startsWith('/shop') ||
      url.startsWith('/cart') ||
      url.startsWith('/checkout') ||
      url.includes('/shop/product')
    );
  }
}
