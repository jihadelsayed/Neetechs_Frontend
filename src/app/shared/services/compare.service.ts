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
  compare_items: isLocalStorageAvailable()
    ? JSON.parse(localStorage.getItem('compare_products') || '[]')
    : []
}

@Injectable({
  providedIn: 'root'
})


export class CompareService {

  public getCompareProducts () {
    return state.compare_items;
  }

  constructor(private ToastService: ToastService) { }

  // add_compare_product
  add_compare_product (payload: IProduct) {
    const isAdded = state.compare_items.findIndex((p: IProduct) => p.id === payload.id);
    if (isAdded !== -1) {
      state.compare_items = state.compare_items.filter((p: IProduct) => p.id !== payload.id);
      this.ToastService.error(`${payload.title} remove to compare`);
    } else {
      state.compare_items.push(payload);
      this.ToastService.success(`${payload.title} added to compare`);
    }
    if (isLocalStorageAvailable()) {
      localStorage.setItem('compare_products', JSON.stringify(state.compare_items));
    }
  };
  // remove compare
  removeCompare(payload: IProduct) {
    state.compare_items = state.compare_items.filter((p: IProduct) => p.id !== payload.id);
    this.ToastService.error(`${payload.title} remove to compare`);
    if (isLocalStorageAvailable()) {
      localStorage.setItem('compare_products', JSON.stringify(state.compare_items));
    }
  };
}
