import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduct } from '../types/product-type';
import { SAMPLE_PRODUCTS } from './products';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products = SAMPLE_PRODUCTS;

  getProducts(): Observable<IProduct[]> {
    // Simulate http request for future backend
    return of(this.products);
  }

  getCategories(): string[] {
    const categories = this.products.map(p => p.category?.name || '');
    return Array.from(new Set(categories));
  }
}
