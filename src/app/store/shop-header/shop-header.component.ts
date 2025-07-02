import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../shared/header/cart.service';
import { CurrencyService } from '../../core/currency.service';
import { LanguageService } from '../../core/language.service';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-shop-header',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './shop-header.component.html',
  styleUrl: './shop-header.component.scss'
})
export class ShopHeaderComponent implements OnInit {
  isLanguageActive = false;
  isCurrencyActive = false;
  languages = ['English', 'Svenska', 'عربي'];
  currencies = ['USD', 'SEK', 'الدينار'];
  categories: string[] = [];
  searchTerm = '';
  selectedCategory = 'All';

  constructor(
    public cartService: CartService,
    public currencyService: CurrencyService,
    public languageService: LanguageService,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categories = ['All', ...this.productService.getCategories()];
  }

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

  search(): void {
    const queryParams: any = {};
    if (this.searchTerm) {
      queryParams.search = this.searchTerm;
    }
    if (this.selectedCategory && this.selectedCategory !== 'All') {
      queryParams.category = this.selectedCategory;
    }
    this.router.navigate(['/shop'], { queryParams });
  }
}
