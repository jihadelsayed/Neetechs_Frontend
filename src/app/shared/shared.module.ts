import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// header and footer components

// ui components
import { NiceSelectComponent } from './ui/nice-select/nice-select.component';
import { PaginationComponent } from './ui/pagination/pagination.component';

// footer components
import { FooterOneComponent } from './footer/footer-one/footer-one.component';
import { FooterTwoComponent } from './footer/footer-two/footer-two.component';
import { SocialLinksComponent } from './social-links/social-links.component';

// components
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
import { ElectronicProductBannerComponent } from './components/banner/electronic-product-banner/electronic-product-banner.component';
import { JewelryBannerComponent } from './components/banner/jewelry-banner/jewelry-banner.component';
import { BreadcrumbOneComponent } from './components/breadcrumb/breadcrumb-one/breadcrumb-one.component';
import { BreadcrumbTwoComponent } from './components/breadcrumb/breadcrumb-two/breadcrumb-two.component';
import { ShopDetailsBreadcrumbComponent } from './components/breadcrumb/shop-details-breadcrumb/shop-details-breadcrumb.component';
import { ElectronicCategoryComponent } from './components/category/electronic-category/electronic-category.component';
import { FeatureOneComponent } from './components/feature/feature-one/feature-one.component';
import { FeatureTwoComponent } from './components/feature/feature-two/feature-two.component';
import { BlogReplyFormComponent } from './components/forms/blog-reply-form/blog-reply-form.component';
import { ContactFormComponent } from './components/forms/contact-form/contact-form.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { RegisterFormComponent } from './components/forms/register-form/register-form.component';
import { ShopDetailsFormComponent } from './components/forms/shop-details-form/shop-details-form.component';

import { InstagramAreaOneComponent } from './components/instagram/instagram-area-one/instagram-area-one.component';
import { InstagramAreaTwoComponent } from './components/instagram/instagram-area-two/instagram-area-two.component';
import { ProductModalComponent } from './components/modals/product-modal/product-modal.component';
import { VideoPopapComponent } from './components/modals/video-popap/video-popap.component';
import { CartSidebarComponent } from './components/offcanvas/cart-sidebar/cart-sidebar.component';
import { SocialLoginComponent } from './components/social-login/social-login.component';
import { ProductDetailsRatingItemComponent } from './components/product-details-com/product-details-rating-item/product-details-rating-item.component';
import { ProductDetailsTabNavComponent } from './components/product-details-com/product-details-tab-nav/product-details-tab-nav.component';
import { ProductDetailsThumbComponent } from './components/product-details-com/product-details-thumb/product-details-thumb.component';
import { ProductDetailsWrapperComponent } from './components/product-details-com/product-details-wrapper/product-details-wrapper.component';
import { CountdownTimerComponent } from './components/countdown-timer/countdown-timer.component';
import { MobileSidebarComponent } from './components/offcanvas/mobile-sidebar/mobile-sidebar.component';
import { PaginationTwoComponent } from './ui/pagination-two/pagination-two.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { RoleGuard } from './role.guard';
import { HeroBannerFourComponent } from '@/components/hero-banner/hero-banner-four/hero-banner-four.component';
import { HeroBannerOneComponent } from '@/components/hero-banner/hero-banner-one/hero-banner-one.component';
import { HeroBannerThreeComponent } from '@/components/hero-banner/hero-banner-three/hero-banner-three.component';
import { HeroBannerTwoComponent } from '@/components/hero-banner/hero-banner-two/hero-banner-two.component';
import { HeaderCategoryComponent } from '@/store/shop-header/header/header-com/header-category/header-category.component';
import { HeaderSearchComponent } from '@/store/shop-header/header/header-com/header-search/header-search.component';
import { HeaderTopBarComponent } from '@/store/shop-header/header/header-com/header-top-bar/header-top-bar.component';
import { MenuBarComponent } from '@/store/shop-header/header/header-com/menu-bar/menu-bar.component';
import { HeaderOneComponent } from '@/store/shop-header/header/header-one/header-one.component';
import { HeaderTwoComponent } from '@/store/shop-header/header/header-two/header-two.component';

@NgModule({
  declarations: [
    HeaderOneComponent,
    HeaderTwoComponent,
    MenuBarComponent,
    HeaderCategoryComponent,
    HeaderTopBarComponent,
    NiceSelectComponent,
    FooterOneComponent,
    FooterTwoComponent,
    SocialLinksComponent,
    PaginationComponent,
    HeaderSearchComponent,
    JewelryBannerComponent,
    ElectronicProductBannerComponent,
    BackToTopComponent,
    BreadcrumbOneComponent,

    RegisterFormComponent,
    LoginFormComponent,
    ContactFormComponent,
    BlogReplyFormComponent,
    FeatureTwoComponent,
    FeatureOneComponent,
    ElectronicCategoryComponent,
    ShopDetailsBreadcrumbComponent,
    BreadcrumbTwoComponent,
    VideoPopapComponent,
    CartSidebarComponent,
    SocialLoginComponent,
    HeroBannerThreeComponent,
    HeroBannerFourComponent,
    InstagramAreaOneComponent,
    InstagramAreaTwoComponent,
    ProductModalComponent,
    ShopDetailsFormComponent,
    HeroBannerOneComponent,
    HeroBannerTwoComponent,
    ProductDetailsRatingItemComponent,
    ProductDetailsTabNavComponent,
    ProductDetailsThumbComponent,
    ProductDetailsWrapperComponent,
    CountdownTimerComponent,
    MobileSidebarComponent,
    PaginationTwoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    HeaderOneComponent,
    HeaderTwoComponent,
    NiceSelectComponent,
    FooterOneComponent,
    FooterTwoComponent,
    PaginationComponent,

    JewelryBannerComponent,
    ElectronicProductBannerComponent,
    BackToTopComponent,
    BreadcrumbOneComponent,

    RegisterFormComponent,
    LoginFormComponent,
    ContactFormComponent,
    BlogReplyFormComponent,
    FeatureTwoComponent,
    FeatureOneComponent,
    ElectronicCategoryComponent,
    ShopDetailsBreadcrumbComponent,
    BreadcrumbTwoComponent,
    VideoPopapComponent,
    CartSidebarComponent,
    SocialLoginComponent,
    HeroBannerThreeComponent,
    HeroBannerFourComponent,
    InstagramAreaOneComponent,
    InstagramAreaTwoComponent,
    ProductModalComponent,
    ShopDetailsFormComponent,
    HeroBannerOneComponent,
    HeroBannerTwoComponent,
    ProductDetailsRatingItemComponent,
    ProductDetailsTabNavComponent,
    ProductDetailsThumbComponent,
    ProductDetailsWrapperComponent,
    CountdownTimerComponent,
    PaginationTwoComponent,
  ],
  providers: [
    AuthGuard, // Add AuthGuard to the providers array if not providedIn: 'root'
    RoleGuard,
    // ...
  ],
})
export class SharedModule {}
