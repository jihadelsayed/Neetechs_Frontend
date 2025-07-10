import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WishlistService } from '../core/wishlist.service';
import { CartService } from '../core/cart.service';
import { IProduct } from '../types/product-type';

@Component({
    selector: 'app-wishlist',
    imports: [CommonModule, RouterModule],
    templateUrl: './wishlist.component.html',
    styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {
  constructor(
    public wishlistService: WishlistService,
    private cartService: CartService
  ) {}

  get items(): IProduct[] {
    return this.wishlistService.getWishlistProducts();
  }

  remove(item: IProduct): void {
    this.wishlistService.removeWishlist(item);
  }

  clear(): void {
    this.wishlistService.clearWishlist();
  }

  addToCart(item: IProduct): void {
    this.cartService.addCartProduct(item);
  }

  isInCart(item: IProduct): boolean {
    return this.cartService.isInCart(item);
  }
}
