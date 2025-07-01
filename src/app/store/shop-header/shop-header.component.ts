import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../shared/header/cart.service';

@Component({
  selector: 'app-shop-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './shop-header.component.html',
  styleUrl: './shop-header.component.scss'
})
export class ShopHeaderComponent {
  constructor(public cartService: CartService) {}

  get count(): number {
    return this.cartService.getCartProducts().length;
  }
}
