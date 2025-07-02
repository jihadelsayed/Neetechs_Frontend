import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../shared/header/cart.service';
import { SAMPLE_PRODUCTS } from './products';
import { IProduct } from '../types/product-type';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit {
  products = SAMPLE_PRODUCTS;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    const defaultDesc =
      "This is a demonstration product used to showcase Neetechs' eCommerce functionality. No actual item will be shipped.";
    this.products.forEach(p => {
      p.description ??= defaultDesc;
    });
  }

  onImageError(event: Event): void {
    const element = event.target as HTMLImageElement;
    element.src = '/assets/images/product-placeholder.png';
  }

  addToCart(product: IProduct) {
    this.cartService.addCartProduct(product);
  }
}
