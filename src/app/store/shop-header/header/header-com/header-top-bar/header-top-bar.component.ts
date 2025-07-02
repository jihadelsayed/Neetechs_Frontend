import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CurrencyService } from './currency.service';
import { LanguageService } from './language.service';

@Component({
  selector: 'app-header-top-bar',
  templateUrl: './header-top-bar.component.html',
  styleUrls: ['./header-top-bar.component.scss'],
})
export class HeaderTopBarComponent {
  public isActive: string = '';
  public isCurrencyActive: string = '';
  public currentLanguage: string = '';
  currencies: string[] = ['SEK','USD', 'EUR'];
  languages: string[] = ['Svenska', 'English', 'عربي'];
  
  constructor(private router: Router, public currencyService: CurrencyService, public languageService: LanguageService) {}


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
  logout() {
    // Delete the token from localStorage (or wherever you store your token)
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    
    // Navigate to the login page
    this.router.navigate(['/pages/login']);
  }
  handleActive(type: string): void {
    if (type === this.isActive) {
      this.isActive = '';
    } else {
      this.isActive = type;
    }
  }
  
}
