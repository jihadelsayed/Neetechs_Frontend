import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-checkout-cancel',
  imports: [CommonModule, RouterModule],
  templateUrl: './checkout-cancel.component.html',
  styleUrls: ['./checkout-cancel.component.scss'],
})
export class CheckoutCancelComponent {}
