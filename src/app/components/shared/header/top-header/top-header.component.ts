// top-header.component.ts
import { Component, Renderer2 } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import category_data from '../category-data';
import { CurrencyService } from '../../../../services/currency.service';
import { LanguageService } from '../../../../services/language.service';
 
@Component({
  selector: 'app-top-header',
  standalone: true,
  imports: [RouterModule, NgClass,CommonModule],
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent {
  isLanguageActive = false;
  isSettingsActive = false;
  isCurrencyActive = false;
  currencies = ['SEK', 'USD', 'EUR'];
  languages = ['Svenska', 'English', 'عربي'];

  constructor(private router: Router, public currencyService: CurrencyService, public languageService: LanguageService) {}

  changeLanguage(language: string): void {
    this.languageService.setCurrentLanguage(language);
  }

  changeCurrency(currency: string): void {
    this.currencyService.setCurrentCurrency(currency);
  }

  toggleActive(section: string): void {
    if (section === 'language') {
      this.isLanguageActive = !this.isLanguageActive;
      this.isCurrencyActive = false;
      this.isSettingsActive = false;
    } else if (section === 'currency') {
      this.isCurrencyActive = !this.isCurrencyActive;
      this.isLanguageActive = false;
      this.isSettingsActive = false;
    } else if (section === 'setting') {
      this.isSettingsActive = !this.isSettingsActive;
      this.isLanguageActive = false;
      this.isCurrencyActive = false;
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    this.router.navigate(['/pages/login']);
  }
}
