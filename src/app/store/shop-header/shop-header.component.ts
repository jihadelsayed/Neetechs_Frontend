import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../shared/header/cart.service';
import { CurrencyService } from '../../core/currency.service';
import { LanguageService } from '../../core/language.service';

@Component({
  selector: 'app-shop-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './shop-header.component.html',
  styleUrl: './shop-header.component.scss'
})
export class ShopHeaderComponent {
  isLanguageActive = false;
  isCurrencyActive = false;
  languages = ['English', 'Svenska', 'عربي'];
  currencies = ['USD', 'SEK', 'الدينار'];

  constructor(
    public cartService: CartService,
    public currencyService: CurrencyService,
    public languageService: LanguageService
  ) {}

  get count(): number {
    return this.cartService.getCartProducts().length;
  }

  toggle(section: 'language' | 'currency'): void {
    if (section === 'language') {
      this.isLanguageActive = !this.isLanguageActive;
      this.isCurrencyActive = false;
    } else {
      this.isCurrencyActive = !this.isCurrencyActive;
      this.isLanguageActive = false;
    }
  }

  changeLanguage(lang: string): void {
    this.languageService.setCurrentLanguage(lang);
  }

  changeCurrency(cur: string): void {
    this.currencyService.setCurrentCurrency(cur);
  }
}
