import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CartService } from '../core/cart.service';
import { SAMPLE_PRODUCTS } from './products';
import { IProduct } from '../types/product-type';
import { Title, Meta } from '@angular/platform-browser';
import { ImageFallbackDirective } from '../shared/directives/image-fallback.directive';
 
 @Component({
   selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, ImageFallbackDirective],
   templateUrl: './product-detail.component.html',
   styleUrl: './product-detail.component.scss'
 })
export class ProductDetailComponent {
  product?: IProduct;
  selectedImage = '';
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private title: Title,
    private meta: Meta
  ) {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.product = SAMPLE_PRODUCTS.find(p => p.slug === slug);
    if (this.product) {
      this.product.description ??=
        "This is a demonstration product used to showcase Neetechs' eCommerce functionality. No actual item will be shipped.";
      this.selectedImage = this.product.imageURLs[0]?.img || this.product.img;
      this.title.setTitle(`${this.product.title} - Neetechs`);
      this.meta.updateTag({ name: 'description', content: this.product.description });
    }
  }
 
  addToCart(product: IProduct) {
    this.cartService.addCartProduct(product);
  }

  selectImage(url: string): void {
    this.selectedImage = url;
  }

}


