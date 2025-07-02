import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from './../shared/shared.module';
import { ShopModule } from '../shop/shop.module';
import { CouponComponent } from './coupon/coupon.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { RepairComponent } from './repair/repair.component';
import { ProfileDetailsComponent } from './profile/profile-details/profile-details.component';
import { ProfileOrdersComponent } from './profile/profile-orders/profile-orders.component';
import { ProfileNotificationsComponent } from './profile/profile-notifications/profile-notifications.component';
import { ProfileAddressesComponent } from './profile/profile-addresses/profile-addresses.component';
import { ProfilePasswordComponent } from './profile/profile-password/profile-password.component';

@NgModule({
  declarations: [
    ContactComponent,
    CouponComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    NotFoundComponent,
    CheckoutComponent,
    ProfileComponent,
    SearchComponent,
    RepairComponent,
    ProfileDetailsComponent,
    ProfileOrdersComponent,
    ProfileNotificationsComponent,
    ProfileAddressesComponent,
    ProfilePasswordComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ShopModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PagesModule {}
