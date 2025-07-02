import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../shared/header/cart.service';
import { IProduct } from '../types/product-type';
import { ProductService } from './product.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit {
  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  categories: string[] = [];
  selectedCategory = 'All';
  sortOption = 'newest';
  page = 1;
  pageSize = 6;
  Math = Math;

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Shop - Neetechs');
    this.meta.updateTag({ name: 'description', content: 'Browse products in our shop.' });
    this.productService.getProducts().subscribe(p => {
      this.products = p.map(prod => ({
        ...prod,
        description:
          prod.description ??
          "This is a demonstration product used to showcase Neetechs' eCommerce functionality. No actual item will be shipped.",
      }));
      this.categories = ['All', ...this.productService.getCategories()];
      this.applyFilters();
    });
  }

  applyFilters(): void {
    let result = [...this.products];
    if (this.selectedCategory !== 'All') {
      result = result.filter(p => p.category?.name === this.selectedCategory);
    }
    switch (this.sortOption) {
      case 'priceAsc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        break; // newest is default order as loaded
    }
    this.filteredProducts = result;
    this.page = 1;
  }

  get pagedProducts(): IProduct[] {
    const start = (this.page - 1) * this.pageSize;
    return this.filteredProducts.slice(start, start + this.pageSize);
  }

  nextPage(): void {
    if (this.page * this.pageSize < this.filteredProducts.length) {
      this.page++;
    }
  }

  prevPage(): void {
    if (this.page > 1) {
      this.page--;
    }
  }

  addToCart(product: IProduct): void {
    this.cartService.addCartProduct(product);
  }

  onImageError(event: Event): void {
    const element = event.target as HTMLImageElement;
    element.src = '/assets/images/product-placeholder.png';
  }
}
