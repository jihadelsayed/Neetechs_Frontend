import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private localStorageKey = 'selectedCurrency';

  private currencies: { code: string; symbol: string }[] = [
    { code: 'USD', symbol: '$' },
    { code: 'SEK', symbol: 'kr' },
    { code: 'الدينار', symbol: 'د.ك' },
    // Add more currencies as needed
  ];

  private currentCurrency: { code: string; symbol: string } = this.currencies[0]; // Default to SEK

  constructor() {
    // Check if localStorage is available
    if (typeof localStorage !== 'undefined') {
      // Load the selected currency from localStorage during service initialization
      const storedCurrency = localStorage.getItem(this.localStorageKey);
      if (storedCurrency) {
        this.currentCurrency = JSON.parse(storedCurrency) || this.currencies[0];
      }
    } else {
      //console.error('localStorage is not available');
      this.currentCurrency = this.currencies[0]; // Fallback to default currency if localStorage is not available
    }

  }
  

  getCurrentCurrency(): { code: string; symbol: string } {
    return this.currentCurrency;
  }  
  setCurrentCurrency(currencyCode: string): void {
    const newCurrency = this.getCurrencyByCode(currencyCode) || this.currencies[0];
    this.currentCurrency = newCurrency;
  
    // Save the selected currency (including symbol) to localStorage
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.localStorageKey, JSON.stringify(newCurrency));

    } else {
      //console.error('localStorage is not available');
    }
    location.reload(); // Avoid unnecessary page reload
  }
  
  private getCurrencyByCode(code: string): { code: string; symbol: string } | undefined {
    return this.currencies.find((currency) => currency.code === code);
  }
}
