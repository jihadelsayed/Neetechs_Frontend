import { Component,Input } from '@angular/core';
import { IProduct } from '@/types/product-type';
import { CartService } from '@/shared/services/cart.service';
import { CompareService } from '@/shared/services/compare.service';
import { WishlistService } from '@/shared/services/wishlist.service';
import { CurrencyService } from '@/shared/header/header-com/header-top-bar/currency.service';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent {
  @Input () product! : IProduct;

  constructor(
    public cartService: CartService,
    public wishlistService: WishlistService,
    public compareService: CompareService, public currencyService: CurrencyService
  ) {}
  getCurrencySymbol(): string {
    const currentCurrency = this.currencyService.getCurrentCurrency();
    return currentCurrency ? currentCurrency.symbol : ''; // Return an empty string or handle the default case as needed
  }
  // add to cart
  addToCart(product: IProduct) {
    this.cartService.addCartProduct(product);
  }
  // add to cart
  addToWishlist(product: IProduct) {
    this.wishlistService.add_wishlist_product(product);
  }
  // add to cart
  addToCompare(product: IProduct) {
    this.compareService.add_compare_product(product);
  }

  // Function to check if an item is in the cart
  isItemInCart(item: IProduct): boolean {
    return this.cartService.getCartProducts().some((prd: IProduct) => prd.id === item.id);
  }
}
