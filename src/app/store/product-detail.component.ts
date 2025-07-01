import { Component } from '@angular/core';
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
export class ProductDetailComponent {
  product?: IProduct;
  constructor(private route: ActivatedRoute, private cartService: CartService) {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.product = SAMPLE_PRODUCTS.find(p => p.slug === slug);
  }

  addToCart(product: IProduct) {
    this.cartService.addCartProduct(product);
  }
}

