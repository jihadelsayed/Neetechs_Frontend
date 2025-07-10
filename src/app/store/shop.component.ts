import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../core/cart.service';
import { IProduct } from '../types/product-type';
import { ProductService } from './product.service';
import { Title, Meta } from '@angular/platform-browser';
import { WishlistService } from '../core/wishlist.service';
import { ImageFallbackDirective } from '../shared/directives/image-fallback.directive';

@Component({
    selector: 'app-shop',
    imports: [CommonModule, RouterModule, FormsModule, ImageFallbackDirective],
    templateUrl: './shop.component.html',
    styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit {
  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  categories: string[] = [];
  selectedCategory = 'All';
  searchTerm = '';
  sortOption = 'newest';
  page = 1;
  pageSize = 6;
  quickProduct: IProduct | null = null;
Math = Math; // Expose Math for use in templates
  constructor(
    private cartService: CartService,
    private wishlistService: WishlistService,
    private productService: ProductService,
    private title: Title,
    private meta: Meta,
    private route: ActivatedRoute,
    private router: Router
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
      this.route.queryParams.subscribe(params => {
        this.searchTerm = params['search'] || '';
        this.selectedCategory = params['category'] || 'All';
        this.applyFilters();
      });
    });
  }

  applyFilters(): void {
    let result = [...this.products];
    if (this.selectedCategory !== 'All') {
      result = result.filter(p => p.category?.name === this.selectedCategory);
    }
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      result = result.filter(p => p.title.toLowerCase().includes(term));
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
    const queryParams: any = {};
    if (this.searchTerm) {
      queryParams.search = this.searchTerm;
    }
    if (this.selectedCategory !== 'All') {
      queryParams.category = this.selectedCategory;
    }
    this.router.navigate([], { queryParams });
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

  toggleWishlist(product: IProduct): void {
    this.wishlistService.add_wishlist_product(product);
  }

  isWishlisted(product: IProduct): boolean {
    return this.wishlistService.getWishlistProducts().some((p: IProduct) => p.id === product.id);
  }

  openQuickView(product: IProduct): void {
    this.quickProduct = product;
  }

  closeQuickView(): void {
    this.quickProduct = null;
  }

    navigateTo(url: string): void {
    this.router.navigate([url]);
  }
}
