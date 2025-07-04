import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { ProductService } from '@/shared/services/product.service';
import { IProduct } from '@/types/product-type';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  selector: 'app-product-details-with-countdown',
  templateUrl: './product-details-with-countdown.component.html',
  styleUrls: ['./product-details-with-countdown.component.scss']
})
export class ProductDetailsWithCountdownComponent {
  public product!: IProduct;
  constructor(public productService: ProductService) {
    this.productService.products.subscribe((products) => {
      this.product = products.find(p => p.offerDate?.endDate)!;
    });
  }
}
