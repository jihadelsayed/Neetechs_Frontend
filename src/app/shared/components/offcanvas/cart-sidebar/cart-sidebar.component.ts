import { Component } from '@angular/core';
import { CartService } from '@/shared/services/cart.service';
import { CurrencyService } from '@/core/currency.service';

@Component({
  selector: 'app-cart-sidebar',
  templateUrl: './cart-sidebar.component.html',
  styleUrls: ['./cart-sidebar.component.scss']
})
export class CartSidebarComponent {

  constructor(public cartService:CartService,public currencyService: CurrencyService) {}


  getCurrencySymbol(): string {
    const currentCurrency = this.currencyService.getCurrentCurrency();
    return currentCurrency ? currentCurrency.symbol : ''; // Return an empty string or handle the default case as needed
  }
}
