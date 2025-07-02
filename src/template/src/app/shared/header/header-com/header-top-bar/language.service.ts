import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private localStorageKey = 'selectedLanguage';

  private languages: string[] = ['Svenska', 'English', 'عربي'];

  private currentLanguage: string = this.languages[0]; // Default to Swedish

  constructor() {
    // Load the selected language from localStorage during service initialization
    const storedLanguage = localStorage.getItem(this.localStorageKey);
    if (storedLanguage && this.languages.includes(storedLanguage)) {
      this.currentLanguage = storedLanguage;
    }
  }

  getCurrentLanguage(): string {
    return this.currentLanguage;
  }

  setCurrentLanguage(language: string): void {
    this.currentLanguage = language;

    // Save the selected language to localStorage
    localStorage.setItem(this.localStorageKey, language);
    location.reload(); // Avoid unnecessary page reload
  }
}
