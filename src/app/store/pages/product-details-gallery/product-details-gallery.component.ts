import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { IProduct } from '@/types/product-type';
import { ProductService } from '@/shared/services/product.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  selector: 'app-product-details-gallery',
  templateUrl: './product-details-gallery.component.html',
  styleUrls: ['./product-details-gallery.component.scss']
})
export class ProductDetailsGalleryComponent {
  public product!: IProduct;
  constructor(public productService: ProductService) {
    this.productService.products.subscribe((products) => {
      this.product = products[8];
    });
  }
}
