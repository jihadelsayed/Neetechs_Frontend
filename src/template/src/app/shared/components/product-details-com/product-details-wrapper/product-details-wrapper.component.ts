import { Component, Input } from '@angular/core';
import { IProduct } from '@/types/product-type';
import { ProductService } from 'src/app/shared/services/product.service';
import { CartService } from '@/shared/services/cart.service';
import { CurrencyService } from '@/shared/header/header-com/header-top-bar/currency.service';

@Component({
  selector: 'app-product-details-wrapper',
  templateUrl: './product-details-wrapper.component.html',
  styleUrls: ['./product-details-wrapper.component.scss'],
})
export class ProductDetailsWrapperComponent {
  @Input() product!: IProduct;
  @Input() isShowBottom: boolean = true;

  textMore = false;

  handleTextToggle() {
    this.textMore = !this.textMore;
  }

  getCurrencySymbol(): string {
    const currentCurrency = this.currencyService.getCurrentCurrency();
    return currentCurrency ? currentCurrency.symbol : ''; // Return an empty string or handle the default case as needed
  }
  constructor(
    public productService: ProductService,
    public cartService: CartService,public currencyService: CurrencyService
  ) {}

  handleIsColorVariant(product: IProduct) {
    if (product.imageURLs.some((item) => item?.color && item?.color?.name)) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit() {}
}
