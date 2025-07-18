import { Component, Inject } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PLATFORM_ID } from '@angular/core';
import { CurrencyService } from './currency.service';
import { LanguageService } from './language.service';

@Component({
    imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
    selector: 'app-header-top-bar',
    templateUrl: './header-top-bar.component.html',
    styleUrls: ['./header-top-bar.component.scss']
})
export class HeaderTopBarComponent {
  public isActive: string = '';
  public isCurrencyActive: string = '';
  public currentLanguage: string = '';
  currencies: string[] = ['SEK', 'USD', 'EUR'];
  languages: string[] = ['Swedish', 'English', 'عربي'];

  constructor(
    private router: Router,
    public currencyService: CurrencyService,
    public languageService: LanguageService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  changeLanguage(language: string): void {
    this.languageService.setCurrentLanguage(language);
  }

  handleActiveLanguage(language: string): void {
    if (language === this.isActive) {
      this.isActive = '';
    } else {
      this.isActive = language;
    }
  }

  changeCurrency(currency: any): void {
    this.currencyService.setCurrentCurrency(currency);
  }

  handleActiveCurrency(section: any): void {
    if (section === this.isCurrencyActive) {
      this.isCurrencyActive = '';
    } else {
      this.isCurrencyActive = section;
    }
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
      localStorage.removeItem('userInfo');
    }
    this.router.navigate(['/login']);
  }

  handleActive(type: string): void {
    if (type === this.isActive) {
      this.isActive = '';
    } else {
      this.isActive = type;
    }
  }
}
