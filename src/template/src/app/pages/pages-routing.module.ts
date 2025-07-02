import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CouponComponent } from './coupon/coupon.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { RepairComponent } from './repair/repair.component';
import { AuthGuard } from '@/shared/auth.guard';
import { RoleGuard } from '@/shared/role.guard';

const routes: Routes = [
  {
    path: 'repair',
    component: RepairComponent,
    title: 'Reparation - Phone Tech & Dataservice',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Kontakt - Phone Tech & Dataservice',
  },
  {
    path: 'coupons',
    component: CouponComponent,
    title: 'Kuponger - Phone Tech & Dataservice',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'Om - Phone Tech & Dataservice',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'logga in - Phone Tech & Dataservice',
    canActivate: [RoleGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Registrera - Phone Tech & Dataservice',
    canActivate: [RoleGuard],
  },
  {
    path: 'forgot',
    component: ForgotPasswordComponent,
    title: 'Glömde Lösenord',
    canActivate: [RoleGuard],
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    title: 'Kundvagn - Phone Tech & Dataservice',
  },
  {
    path: 'profile',
    component: ProfileComponent,
    title: 'Mitt Konto - Phone Tech & Dataservice',
    canActivate: [AuthGuard],
  },
  {
    path: 'search',
    component: SearchComponent,
    title: 'Sök - Phone Tech & Dataservice',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
