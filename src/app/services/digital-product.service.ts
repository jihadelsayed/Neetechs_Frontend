// src/app/services/digital-product.service.ts
import { Injectable } from '@angular/core';
import {
  DIGITAL_PRODUCTS,
  DigitalProduct,
} from '../data/digital-products.data';

@Injectable({ providedIn: 'root' })
export class DigitalProductService {
  private products = DIGITAL_PRODUCTS;

  getAll(): DigitalProduct[] {
    return this.products;
  }

  getBySlug(slug: string): DigitalProduct | undefined {
    return this.products.find((p) => p.slug === slug);
  }
}
