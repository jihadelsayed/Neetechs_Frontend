import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type ToolMode = 'grammar' | 'spelling' | 'style';
export interface CheckOptions {
  apiKey: string;
  model?: string;        // 'gpt-5', 'gpt-5-mini', 'gpt-4o-mini', etc.
  temperature?: number;  // optional; if omitted, NOT sent
}

@Injectable({ providedIn: 'root' })
export class GrammarCheckService {
  private readonly chatUrl = 'https://api.openai.com/v1/chat/completions';

  constructor(private http: HttpClient) {}

  private headers(apiKey: string) {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    });
  }

  private promptFor(mode: ToolMode, text: string): string {
    switch (mode) {
      case 'grammar':
        return `Fix grammar. Return corrected text, then bullet list of changes.\n\n${text}`;
      case 'spelling':
        return `Fix spelling. Return corrected text, then bullet list of corrections.\n\n${text}`;
      case 'style':
        return `Improve clarity & tone (concise, natural). Return improved text, then 3–5 bullets explaining changes.\n\n${text}`;
    }
  }

  checkText(text: string, mode: ToolMode, opts: CheckOptions): Observable<any> {
    const model = (opts.model || 'gpt-5-mini').trim();

    const body: any = {
      model,
      messages: [
        { role: 'system', content: 'You are a precise English editor. Keep meaning, be concise.' },
        { role: 'user', content: this.promptFor(mode, text) },
      ],
    };

    // IMPORTANT: only include temperature if provided; some models reject decimals or the field entirely
    if (typeof opts.temperature === 'number') {
      body.temperature = opts.temperature;
    }

    return this.http.post(this.chatUrl, body, { headers: this.headers(opts.apiKey) });
  }
}
