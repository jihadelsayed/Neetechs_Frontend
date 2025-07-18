import { Injectable } from '@angular/core';
import { ToastService } from './toast.service';
import { IProduct } from '../types/product-type';


function isLocalStorageAvailable(): boolean {
  try {
    const testKey = 'test';
    localStorage.setItem(testKey, 'testValue');
    localStorage.removeItem(testKey);
    return true;
  } catch (e) {
    return false;
  }
}
const state = {
  wishlists: isLocalStorageAvailable() ? JSON.parse(localStorage.getItem('wishlist_products') || '[]') : []
  
}

// if (typeof localStorage !== 'undefined') {
// } else {
// }
@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private ToastService: ToastService) { }

  public getWishlistProducts() {
    return state.wishlists;
  }

  add_wishlist_product(payload: IProduct) {
    const isAdded = state.wishlists.findIndex((p: IProduct) => p.id === payload.id);
    if (isAdded !== -1) {
      state.wishlists = state.wishlists.filter((p: IProduct) => p.id !== payload.id);
      this.ToastService.error(`${payload.title} removed from wishlist`);
    } else {
      state.wishlists.push(payload);
      this.ToastService.success(`${payload.title} added to wishlist`);
    }
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem("wishlist_products", JSON.stringify(state.wishlists));

    } else {
    }
    if (typeof localStorage !== 'undefined') {
    } else {
    }
  }

  removeWishlist(payload: IProduct) {
    state.wishlists = state.wishlists.filter((p: IProduct) => p.id !== payload.id);
    this.ToastService.error(`${payload.title} removed from wishlist`);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem("wishlist_products", JSON.stringify(state.wishlists));

    } else {
    }
  }

  clearWishlist() {
    const confirmMsg = window.confirm("Are you sure you want to clear your wishlist?");
    if (confirmMsg) {
      state.wishlists = [];
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem("wishlist_products", JSON.stringify(state.wishlists));

      } else {
      }
    }
  }
}
