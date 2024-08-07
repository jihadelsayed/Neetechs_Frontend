import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GrammarCheckService {
  private apiUrl: string = 'https://api.openai.com/v1/chat/completions'; // OpenAI API URL
  private model: string = 'gpt-4o-mini'; // The model you want to use

  constructor(private http: HttpClient) {}

  private createHeaders(apiKey: string): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    });
  }

  checkGrammar(text: string, apiKey: string): Observable<any> {
    const prompt = `Check the grammar of the following text and suggest corrections:\n\n"${text}"`;
    const requestBody = {
      model: this.model,
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: prompt }
      ]
    };
    return this.http.post(this.apiUrl, requestBody, { headers: this.createHeaders(apiKey) });
  }

  checkSpelling(text: string, apiKey: string): Observable<any> {
    const prompt = `Check the spelling of the following text and suggest corrections:\n\n"${text}"`;
    const requestBody = {
      model: this.model,
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: prompt }
      ]
    };
    return this.http.post(this.apiUrl, requestBody, { headers: this.createHeaders(apiKey) });
  }

  suggestStyle(text: string, apiKey: string): Observable<any> {
    const prompt = `Analyze the style of the following text and provide style improvement suggestions:\n\n"${text}"`;
    const requestBody = {
      model: this.model,
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: prompt }
      ]
    };
    return this.http.post(this.apiUrl, requestBody, { headers: this.createHeaders(apiKey) });
  }
}
