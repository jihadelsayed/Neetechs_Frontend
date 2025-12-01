import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { DigitalProduct } from '../models/digital-product.model';
@Injectable({ providedIn: 'root' })
export class DigitalProductService {
  private baseUrl = `${environment.apiBaseUrl}/digital-products/`; 
  // غيّر المسار حسب الـ DRF (مثلاً /digital-product/ أو /store/digital-products/)

  constructor(private http: HttpClient) {}

  getAll(): Observable<DigitalProduct[]> {
    return this.http.get<DigitalProduct[]>(this.baseUrl);
  }

  getBySlug(slug: string): Observable<DigitalProduct> {
    return this.http.get<DigitalProduct>(`${this.baseUrl}${slug}/`);
  }

  /** يبدأ شراء المنتج – Django ينادي Stripe ويرجع لك checkout_url أو session_id */
  startCheckout(slug: string): Observable<{ checkout_url: string }> {
    return this.http.post<{ checkout_url: string }>(
      `${this.baseUrl}${slug}/checkout/`, // عدّل حسب endpoint اللي عاملُه في Django
      {}
    );
  }
}
