import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DigitalProduct,
  DIGITAL_PRODUCTS,
} from '../../../data/digital-products.data';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-digital-products-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './digital-products-list.component.html',
  styleUrls: ['./digital-products-list.component.scss'],
})
export class DigitalProductsListComponent {
  digitalProducts: DigitalProduct[] = DIGITAL_PRODUCTS;
}
