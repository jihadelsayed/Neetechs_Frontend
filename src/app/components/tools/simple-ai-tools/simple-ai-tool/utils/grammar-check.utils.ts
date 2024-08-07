import { Observable } from 'rxjs';
import { GrammarCheckService } from '../services/grammar-check.service';

// Assuming an instance of ApiService is passed as a parameter
export function checkGrammar(text: string, apiService: GrammarCheckService, apiKey: string): Observable<any> {
  return apiService.checkGrammar(text, apiKey);
}

export function checkSpelling(text: string, apiService: GrammarCheckService, apiKey: string): Observable<any> {
  return apiService.checkSpelling(text, apiKey);
}

export function suggestStyle(text: string, apiService: GrammarCheckService, apiKey: string): Observable<any> {
  return apiService.suggestStyle(text, apiKey);
}