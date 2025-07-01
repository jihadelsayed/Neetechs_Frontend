import { Routes } from '@angular/router';

export const storeRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shop.component').then(m => m.ShopComponent),
  },
  {
    path: 'product/:slug',
    loadComponent: () => import('./product-detail.component').then(m => m.ProductDetailComponent),
  },
  {
    path: 'cart',
    loadComponent: () => import('./cart.component').then(m => m.CartComponent),
  },
  {
    path: 'checkout',
    loadComponent: () => import('./checkout.component').then(m => m.CheckoutComponent),
  },
];
