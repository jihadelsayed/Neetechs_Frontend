import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

export interface CheckoutSessionInfo {
  id: string;
  status: string;               // e.g. "paid"
  product_name: string;
  product_slug: string;
  download_url?: string;        // لو رجعتها من Django
  amount_total?: number;
  currency?: string;
}

@Injectable({ providedIn: 'root' })
export class CheckoutService {
  private baseUrl = `${environment.apiBaseUrl}/payments/checkout/session/`;
  // غيّر المسار حسب الـ Django view اللي حتعمله
  // مثال في Django: path("api/payments/checkout/session/<str:session_id>/", ...)

  constructor(private http: HttpClient) {}

  getSessionInfo(sessionId: string): Observable<CheckoutSessionInfo> {
  return this.http.get<CheckoutSessionInfo>(`${this.baseUrl}${sessionId}/`);
  }
}
