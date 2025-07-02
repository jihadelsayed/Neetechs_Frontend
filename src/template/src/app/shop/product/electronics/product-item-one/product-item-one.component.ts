import { Component, Input } from '@angular/core';
import { IProduct } from '@/types/product-type';
import { CartService } from '@/shared/services/cart.service';
import { WishlistService } from '@/shared/services/wishlist.service';
import { UtilsService } from '@/shared/services/utils.service';
import { CurrencyService } from '@/shared/header/header-com/header-top-bar/currency.service';

@Component({
  selector: 'app-product-item-one',
  templateUrl: './product-item-one.component.html',
  styleUrls: ['./product-item-one.component.scss']
})
export class ProductItemOneComponent {
  @Input() product!: IProduct;
  @Input() offer_style: Boolean | undefined;

  constructor(
    public cartService: CartService,
    public wishlistService: WishlistService,
    public utilsService: UtilsService,
    
    public currencyService: CurrencyService) {}

    getCurrencySymbol(): string {
      const currentCurrency = this.currencyService.getCurrentCurrency();
      return currentCurrency ? currentCurrency.symbol : ''; // Return an empty string or handle the default case as needed
    }  // add to cart
  addToCart(product: IProduct) {
    this.cartService.addCartProduct(product);
  }
  // add to cart
  addToWishlist(product: IProduct) {
    this.wishlistService.add_wishlist_product(product);
  }

  // Function to check if an item is in the cart
  isItemInCart(item: IProduct): boolean {
    return this.cartService.getCartProducts().some((prd: IProduct) => prd.id === item.id);
  }
  isItemInWishlist(item: IProduct): boolean {
    return this.wishlistService.getWishlistProducts().some((prd: IProduct) => prd.id === item.id);
  }
  productStatus(product: IProduct): boolean {
    return product.status === 'out-of-stock' || product.quantity === 0;
  }
}
