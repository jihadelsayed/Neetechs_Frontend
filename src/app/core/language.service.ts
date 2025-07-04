import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private localStorageKey = 'selectedLanguage';

  private languages: string[] = ['English', 'Swedish',  'عربي'];

  private currentLanguage: string = this.languages[0]; // Default to English

  constructor() {
    // Load the selected language from localStorage during service initialization
    if (typeof localStorage !== 'undefined') {
      const storedLanguage = localStorage.getItem(this.localStorageKey);
      if (storedLanguage && this.languages.includes(storedLanguage)) {
        this.currentLanguage = storedLanguage;
      }
    } else {
     // console.error('localStorage is not available');
    }
    
  }

  getCurrentLanguage(): string {
    return this.currentLanguage;
  }

  setCurrentLanguage(language: string): void {
    this.currentLanguage = language;

    // Save the selected language to localStorage
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.localStorageKey, language);
      location.reload(); // Avoid unnecessary page reload

    } else {
      //console.error('localStorage is not available');
    }
  }
}
