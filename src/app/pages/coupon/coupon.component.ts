import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import coupon_data from '../../shared/coupon-data';
import { ICoupon } from '../../shared/types/coupon-type';
import { CurrencyService } from '../../core/currency.service';

@Component({
    selector: 'app-coupon',
    imports: [CommonModule],
    templateUrl: './coupon.component.html',
    styleUrls: ['./coupon.component.scss']
})
export class CouponComponent {
  public coupons = coupon_data;

  isCouponActive(coupon: ICoupon): boolean {
    const currentTime = new Date().getTime();
    const couponEndTime = new Date(coupon.endTime).getTime();

    return currentTime > couponEndTime;
  }
  constructor(public currencyService: CurrencyService) {}



  getCurrencySymbol(): string {
    const currentCurrency = this.currencyService.getCurrentCurrency();
    return currentCurrency ? currentCurrency.symbol : ''; // Return an empty string or handle the default case as needed
  }
  index: number | null = null;

  async copyCouponCode(couponCode: string, i: number) {

    try {
      await navigator.clipboard.writeText(couponCode);
      // Set the "Copied" message to true
      this.index = i;

      // Reset the "Copied" message after 3000 ms (3 seconds)
      setTimeout(() => {
        this.index = null;
      }, 3000);
    } catch (error) {
      console.error('Failed to copy: ', error);
    }
  }
}
