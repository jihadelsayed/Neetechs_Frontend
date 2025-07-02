import { CurrencyService } from '@/shared/header/header-com/header-top-bar/currency.service';
import { IProduct } from '@/types/product-type';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-product-sm-item',
  templateUrl: './product-sm-item.component.html',
  styleUrls: ['./product-sm-item.component.scss']
})
export class ProductSmItemComponent {
  @Input() product!: IProduct;
  constructor(public currencyService: CurrencyService) {}

  getCurrencySymbol(): string {
    const currentCurrency = this.currencyService.getCurrentCurrency();
    return currentCurrency ? currentCurrency.symbol : ''; // Return an empty string or handle the default case as needed
  }
}
