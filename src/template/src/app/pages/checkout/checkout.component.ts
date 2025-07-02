import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '@/shared/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { CurrencyService } from '@/shared/header/header-com/header-top-bar/currency.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  isOpenLogin = false;
  isOpenCoupon = false;
  shipCost: number = 0;
  couponCode: string = '';
  payment_name: string = '';

  constructor(
    public cartService: CartService,
    private toastrService: ToastrService,public currencyService: CurrencyService
  ) {}


  getCurrencySymbol(): string {
    const currentCurrency = this.currencyService.getCurrentCurrency();
    return currentCurrency ? currentCurrency.symbol : ''; // Return an empty string or handle the default case as needed
  }
  handleOpenLogin() {
    this.isOpenLogin = !this.isOpenLogin;
  }
  handleOpenCoupon() {
    this.isOpenCoupon = !this.isOpenCoupon;
  }

  handleShippingCost(value: number | string) {
    if (value === 'free') {
      this.shipCost = 0;
    } else {
      this.shipCost = value as number;
    }
  }

  public countrySelectOptions = [
    { value: 'select-country', text: 'Select Country' },
    { value: 'berlin-germany', text: 'Berlin Germany' },
    { value: 'paris-france', text: 'Paris France' },
    { value: 'tokiyo-japan', text: 'Tokiyo Japan' },
    { value: 'new-york-us', text: 'New York US' },
  ];

  changeHandler(selectedOption: { value: string; text: string }) {
    console.log('Selected option:', selectedOption);

    // Update the 'country' form control with the selected option's value
    this.checkoutForm.patchValue({
      state: selectedOption.value,
    });
  }

  handleCouponSubmit() {
    console.log(this.couponCode);
    // Add coupon code handling logic here
    if (this.couponCode) {
      // logic here

      // when submitted the from than empty will be coupon code
      this.couponCode = '';
    }
  }

  // handle payment item
  handlePayment(value: string) {
    this.payment_name = value;
  }

  public checkoutForm!: FormGroup;
  public formSubmitted = false;

  ngOnInit() {
    
    this.checkoutForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      company: new FormControl(null),
      country: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      state: new FormControl(null, Validators.required),
      zipCode: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      orderNote: new FormControl(null),
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.checkoutForm.valid) {
      console.log('checkout-form-value', this.checkoutForm.value);
      this.toastrService.success(`Order successfully`);

      // Reset the form
      this.checkoutForm.reset();
      this.formSubmitted = false; // Reset formSubmitted to false
    }
    console.log('checkout-form', this.checkoutForm.value);
  }

  get name() {
    return this.checkoutForm.get('name');
  }
  get lastName() {
    return this.checkoutForm.get('lastName');
  }
  get company() {
    return this.checkoutForm.get('company');
  }
  get country() {
    return this.checkoutForm.get('country');
  }
  get address() {
    return this.checkoutForm.get('address');
  }
  get city() {
    return this.checkoutForm.get('city');
  }
  get state() {
    return this.checkoutForm.get('state');
  }
  get zipCode() {
    return this.checkoutForm.get('zipCode');
  }
  get phone() {
    return this.checkoutForm.get('phone');
  }
  get orderNote() {
    return this.checkoutForm.get('orderNote');
  }
  get email() {
    return this.checkoutForm.get('email');
  }
}
