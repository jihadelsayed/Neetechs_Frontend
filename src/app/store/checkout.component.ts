import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CartService } from '../shared/header/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  name = '';
  email = '';
  address = '';

  constructor(public cartService: CartService) {}

  submit() {
    // In real app, send order to backend
    alert('Order placed!');
    this.cartService.clear_cart();
    this.name = this.email = this.address = '';
  }
}

