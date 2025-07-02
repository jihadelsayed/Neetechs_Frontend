import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../shared/header/cart.service';
import { SAMPLE_PRODUCTS } from './products';
import { IProduct } from '../types/product-type';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {
  product?: IProduct;
  constructor(private route: ActivatedRoute, private cartService: CartService) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    const defaultDesc =
      "This is a demonstration product used to showcase Neetechs' eCommerce functionality. No actual item will be shipped.";
    const found = SAMPLE_PRODUCTS.find(p => p.slug === slug);
    if (found) {
      found.description ??= defaultDesc;
    }
    this.product = found;
  }

  onImageError(event: Event): void {
    const element = event.target as HTMLImageElement;
    element.src = '/assets/images/product-placeholder.png';
  }

  addToCart(product: IProduct) {
    this.cartService.addCartProduct(product);
  }
}
