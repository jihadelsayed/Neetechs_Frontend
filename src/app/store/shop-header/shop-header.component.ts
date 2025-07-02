import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../shared/header/cart.service';
import { CurrencyService } from '../../core/currency.service';
import { LanguageService } from '../../core/language.service';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { ProductService } from '../product.service';
import { NiceSelectComponent } from '../../shared/ui/nice-select/nice-select.component';

@Component({
  selector: 'app-shop-header',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NiceSelectComponent
  ],
  templateUrl: './shop-header.component.html',
  styleUrl: './shop-header.component.scss'
})
export class ShopHeaderComponent implements OnInit {
  isLanguageActive = false;
  isCurrencyActive = false;
  languages = ['English', 'Svenska', 'عربي'];
  currencies = ['USD', 'SEK', 'الدينار'];
  categories: string[] = [];
  categoryOptions: { value: string; text: string }[] = [];
  searchTerm = '';
  searchControl = new FormControl('');
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
    this.categoryOptions = this.categories.map(c => ({ value: c, text: c }));
    this.searchControl.valueChanges
      .pipe(debounceTime(300))
      .subscribe(value => {
        this.searchTerm = value || '';
        this.search();
      });
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

  onCategoryChange(option: { value: string; text: string }): void {
    this.selectedCategory = option.value;
    this.search();
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
