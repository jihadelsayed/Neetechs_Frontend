import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UtilsService } from '@/shared/services/utils.service';
import { Component, Input } from '@angular/core';
import { IProduct } from '@/types/product-type';
import { ProductService } from '@/shared/services/product.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  selector: 'app-product-details-thumb',
  templateUrl: './product-details-thumb.component.html',
  styleUrls: ['./product-details-thumb.component.scss'],
})
export class ProductDetailsThumbComponent {
  @Input() product!: IProduct;
  constructor(
    public productService: ProductService,
    public utilsService: UtilsService
  ) {}
  ngOnInit() {
    if (this.product) {
      this.productService.activeImg = this.product.img;
    }
  }
}
