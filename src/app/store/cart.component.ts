import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { CartService } from '../shared/header/cart.service';
import { IProduct } from '../types/product-type';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  get items(): IProduct[] {
    return this.cartService.getCartProducts();
  }

  constructor(private cartService: CartService, private router: Router) {}

  increment(item: IProduct) {
    this.cartService.addCartProduct(item);
  }

  decrement(item: IProduct) {
    this.cartService.quantityDecrement(item);
  }

  remove(item: IProduct) {
    this.cartService.removeCartProduct(item);
  }

  get total() {
    return this.cartService.totalPriceQuantity();
  }

  goToCheckout(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['/shop/checkout']);
    } else {
      this.router.navigate(['/account/login'], { queryParams: { redirect: 'checkout' } });
    }
  }
}
