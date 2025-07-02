import { Injectable } from '@angular/core';
import { ToastService } from '@/core/toast.service';
import { IProduct } from '@/types/product-type';


function isLocalStorageAvailable(): boolean {
  try {
    const testKey = 'test';
    localStorage.setItem(testKey, '1');
    localStorage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
}

const state = {
  wishlists: isLocalStorageAvailable()
    ? JSON.parse(localStorage.getItem('wishlist_products') || '[]')
    : []
}

@Injectable({
  providedIn: 'root'
})


export class WishlistService {

  constructor(private ToastService: ToastService) { }

  public getWishlistProducts () {
    return state.wishlists;
  }

  // add_wishlist_product
  add_wishlist_product(payload: IProduct) {
    const isAdded = state.wishlists.findIndex((p: IProduct) => p.id === payload.id);
    if (isAdded !== -1) {
      state.wishlists = state.wishlists.filter((p: IProduct) => p.id !== payload.id);
      this.ToastService.error(`${payload.title} remove to wishlist`);
    } else {
      state.wishlists.push(payload);
      this.ToastService.success(`${payload.title} added to wishlist`);
    }
    if (isLocalStorageAvailable()) {
      localStorage.setItem('wishlist_products', JSON.stringify(state.wishlists));
    }
  };
  // removeWishlist
  removeWishlist(payload: IProduct) {
    state.wishlists = state.wishlists.filter((p: IProduct) => p.id !== payload.id);
    this.ToastService.error(`${payload.title} remove to wishlist`);
    if (isLocalStorageAvailable()) {
      localStorage.setItem('wishlist_products', JSON.stringify(state.wishlists));
    }
  };
}
