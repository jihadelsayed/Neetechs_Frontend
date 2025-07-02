import { Component } from '@angular/core';
import { ToastService } from '@/core/toast.service';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-shop-details-form',
  templateUrl: './shop-details-form.component.html',
  styleUrls: ['./shop-details-form.component.scss']
})
export class ShopDetailsFormComponent {

  public shopReviewForm!: FormGroup;
  public formSubmitted = false;

  constructor(private ToastService: ToastService) { }

  ngOnInit () {
    this.shopReviewForm = new FormGroup({
      name:new FormControl(null,Validators.required),
      email:new FormControl(null,[Validators.required,Validators.email]),
      review:new FormControl(null,Validators.required),
    })
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.shopReviewForm.valid) {
      this.ToastService.success(`Message sent successfully`);

      // Reset the form
      this.shopReviewForm.reset();
      this.formSubmitted = false;
    }
  }

  get name() { return this.shopReviewForm.get('name') }
  get email() { return this.shopReviewForm.get('email') }
  get review() { return this.shopReviewForm.get('review') }
}
