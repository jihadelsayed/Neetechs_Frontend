import { Injectable } from '@angular/core';
import { ToastService } from '../../services/toast.service';
import { IProduct } from '../../types/product-type';


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
  cart_products: isLocalStorageAvailable() ? JSON.parse(localStorage.getItem('cart_products') || '[]') : []
  
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public orderQuantity: number = 1;
  public isCartOpen: boolean = false;
  constructor(private toastService: ToastService) { }

  public getCartProducts(): IProduct[] {
    return state.cart_products;
  }

  handleOpenCartSidebar () {
    this.isCartOpen = !this.isCartOpen
  }

  // add_cart_product
  addCartProduct(payload: IProduct) {
    const isExist = state.cart_products.some((i: IProduct) => i.id === payload.id);
    if (payload.status === 'out-of-stock' || payload.quantity === 0) {
      this.toastService.error(`Out of stock ${payload.title}`);
    }
    else if (!isExist) {
      const newItem = {
        ...payload,
        orderQuantity: 1,
      };
      state.cart_products.push(newItem);
      this.toastService.success(`${payload.title} added to cart`);
    } else {
      state.cart_products.map((item: IProduct) => {
        if (item.id === payload.id) {
          if (typeof item.orderQuantity !== "undefined") {
            if (item.quantity >= item.orderQuantity + this.orderQuantity) {
              item.orderQuantity =
                this.orderQuantity !== 1
                  ? this.orderQuantity + item.orderQuantity
                  : item.orderQuantity + 1;
              this.toastService.success(`${this.orderQuantity} ${item.title} added to cart`);
            } else {
              this.toastService.success(`No more quantity available for this product!`);
              this.orderQuantity = 1;
            }
          }
        }
        return { ...item };
      });
    }
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem("cart_products", JSON.stringify(state.cart_products));

    } else {
    }

  };

// total price quantity
  public totalPriceQuantity() {
    return state.cart_products.reduce(
      (cartTotal: { total: number; quantity: number }, cartItem: IProduct) => {
        const { price, orderQuantity, discount } = cartItem;
        if (typeof orderQuantity !== "undefined") {
          if (discount && discount > 0) {
            // Calculate the item total with discount
            const itemTotal = (price - (price * discount) / 100) * orderQuantity;
            cartTotal.total += itemTotal;
          } else {
            // Calculate the item total without discount
            const itemTotal = price * orderQuantity;
            cartTotal.total += itemTotal;
          }
          cartTotal.quantity += orderQuantity;
        }
        return cartTotal;
      },
      {
        total: 0,
        quantity: 0,
      }
    );
  };


  // quantity increment
  increment() {
    return this.orderQuantity = this.orderQuantity + 1;
  }

  // quantity decrement
  decrement() {
    return this.orderQuantity =
      this.orderQuantity > 1
        ? this.orderQuantity - 1
        : this.orderQuantity = 1;
  }

  // quantityDecrement
  quantityDecrement(payload: IProduct) {
    state.cart_products.map((item: IProduct) => {
      if (item.id === payload.id) {
        if (typeof item.orderQuantity !== "undefined") {
          if (item.orderQuantity > 1) {
            item.orderQuantity = item.orderQuantity - 1;
            this.toastService.info(`Decrement Quantity For ${item.title}`);
          }
        }
      }
      return { ...item };
    });
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem("cart_products", JSON.stringify(state.cart_products));
    } else {
    }
  };

  // remover_cart_products
  removeCartProduct(payload: IProduct) {
    state.cart_products = state.cart_products.filter(
      (p: IProduct) => p.id !== payload.id
    );
    this.toastService.error(`${payload.title} remove to cart`);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem("cart_products", JSON.stringify(state.cart_products));
    } else {
    }
  };

  // clear cart
  clear_cart() {
    const confirmMsg = window.confirm(
      "Are you sure deleted your all cart items ?"
    );
    if (confirmMsg) {
      state.cart_products = [];
    }
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem("cart_products", JSON.stringify(state.cart_products));

    } else {
    }

  };
  // initialOrderQuantity
  initialOrderQuantity() {
    return this.orderQuantity = 1;
  };
}
