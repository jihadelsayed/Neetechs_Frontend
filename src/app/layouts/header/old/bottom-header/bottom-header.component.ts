import { NgClass, CommonModule } from '@angular/common';
import { menu_data } from '../menu-data';
// top-header.component.ts
import { Router, RouterModule } from '@angular/router';
import { CurrencyService } from '../../../core/currency.service';
import { LanguageService } from '../../../core/language.service';
import { Inject, PLATFORM_ID,Component, EventEmitter, Output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
@Component({
    selector: 'app-bottom-header',
    imports: [RouterModule, NgClass, CommonModule],
    templateUrl: './bottom-header.component.html',
    styleUrl: './bottom-header.component.scss'
})
export class BottomHeaderComponent {
  public menu_data:any[] = menu_data
  @Output() menuToggle: EventEmitter<void> = new EventEmitter<void>();

  isLanguageActive = false;
  isSettingsActive = false;
  isCurrencyActive = false;
  isLoggedIn = false;

  currencies = ['USD', 'SEK', 'الدينار'];
  languages = ['English', 'Swedish', 'عربي'];

  constructor(private router: Router, public currencyService: CurrencyService, public languageService: LanguageService,
    @Inject(PLATFORM_ID) private platformId: Object

  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token');
      this.isLoggedIn = !!token;
    }
  }
  changeLanguage(language: string): void {
    this.languageService.setCurrentLanguage(language);
    this.isLanguageActive = false;
  }

  changeCurrency(currency: string): void {
    this.currencyService.setCurrentCurrency(currency);
    this.isCurrencyActive = false;
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
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
      localStorage.removeItem('userInfo');
    }
    this.router.navigate(['/login']);
  }
  goToAuth(action: 'signIn' | 'signup'): void {
    const lang = this.languageService.getCurrentLanguage().toLowerCase();
  
    const langMap: { [key: string]: string } = {
      english: 'en',
      swedish: 'sv',
      عربي: 'ar'
    };
  
    const langSlug = langMap[lang] || 'en';
  
    const returnUrl = encodeURIComponent('https://neetechs.com/dashboard');
    const url = `https://accounts.neetechs.com/${langSlug}/${action}?return_url=${returnUrl}`;
  
    window.location.href = url;
  }
    toggleMenu() {
    this.menuToggle.emit();
  }

  navigateToTop() {
    window.scrollTo(0, 0);
    this.toggleMenu();

  }

}
