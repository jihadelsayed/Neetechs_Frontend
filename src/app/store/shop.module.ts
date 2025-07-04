import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSliderModule } from 'ngx-slider-v2';
import { FormsModule } from '@angular/forms';
import { ShopRoutingModule } from './shop-routing.module';

// electronics products
import { ElectronicGadgetProductsComponent } from './product/electronics/electronic-gadget-products/electronic-gadget-products.component';
import { ElectronicNewProductsComponent } from './product/electronics/electronic-new-products/electronic-new-products.component';
import { ElectronicOfferProductsComponent } from './product/electronics/electronic-offer-products/electronic-offer-products.component';
import { ElectronicSmProductsComponent } from './product/electronics/electronic-sm-products/electronic-sm-products.component';
import { ElectronicTrendingProductsComponent } from './product/electronics/electronic-trending-products/electronic-trending-products.component';
// product item
import { ProductItemOneComponent } from './product/electronics/product-item-one/product-item-one.component';
import { ProductSmItemComponent } from './product/electronics/product-sm-item/product-sm-item.component';

// widget components
import { TopRatedProductsComponent } from './product/widget/top-rated-products/top-rated-products.component';
// filter components
import { PriceFilterComponent } from './filtering/price-filter/price-filter.component';
import { StatusFilterComponent } from './filtering/status-filter/status-filter.component';
import { CategoryFilterComponent } from './filtering/category-filter/category-filter.component';
import { BrandFilterComponent } from './filtering/brand-filter/brand-filter.component';
import { ResetFilterRouteComponent } from './filtering/reset-filter-route/reset-filter-route.component';
import { ProductListItemComponent } from './product/widget/product-list-item/product-list-item.component';
// page components
import { ShopListComponent } from './pages/shop-list/shop-list.component';
import { ShopAreaComponent } from './shop-area/shop-area.component';
import { ShopFullWidthComponent } from './pages/shop-full-width/shop-full-width.component';
import { ShopRightSidebarComponent } from './pages/shop-right-sidebar/shop-right-sidebar.component';
import { ShopCategoryComponent } from './pages/shop-category/shop-category.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { DynamicProductDetailsComponent } from './pages/dynamic-product-details/dynamic-product-details.component';
import { RelatedProductsComponent } from './product/related-products/related-products.component';
import { ProductDetailsWithVideoComponent } from './pages/product-details-with-video/product-details-with-video.component';
import { ProductDetailsWithCountdownComponent } from './pages/product-details-with-countdown/product-details-with-countdown.component';
import { ProductDetailsListComponent } from './pages/product-details-list/product-details-list.component';
import { ProductDetailsGalleryComponent } from './pages/product-details-gallery/product-details-gallery.component';
import { CartComponent } from './pages/cart/cart.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { CompareComponent } from './pages/compare/compare.component';
import { OrderComponent } from './pages/order/order.component';

@NgModule({
  declarations: [
    ElectronicGadgetProductsComponent,
    ElectronicNewProductsComponent,
    ElectronicOfferProductsComponent,
    ElectronicSmProductsComponent,
    ElectronicTrendingProductsComponent,
    ProductItemOneComponent,
    ProductSmItemComponent,
    PriceFilterComponent,
    StatusFilterComponent,
    CategoryFilterComponent,
    TopRatedProductsComponent,
    BrandFilterComponent,
    ResetFilterRouteComponent,
    ProductListItemComponent,
    ShopListComponent,
    ShopAreaComponent,
    ShopFullWidthComponent,
    ShopRightSidebarComponent,
    ShopCategoryComponent,
    ProductDetailsComponent,
    DynamicProductDetailsComponent,
    RelatedProductsComponent,
    ProductDetailsWithVideoComponent,
    ProductDetailsWithCountdownComponent,
    ProductDetailsListComponent,
    ProductDetailsGalleryComponent,
    CartComponent,
    WishlistComponent,
    CompareComponent,
    OrderComponent,
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    NgxSliderModule,
    FormsModule,
  ],
  exports: [
    ElectronicGadgetProductsComponent,
    ElectronicNewProductsComponent,
    ElectronicOfferProductsComponent,
    ElectronicSmProductsComponent,
    ElectronicTrendingProductsComponent,
    ProductItemOneComponent,
    ProductSmItemComponent,
    PriceFilterComponent,
    StatusFilterComponent,
    CategoryFilterComponent,
    TopRatedProductsComponent,
    BrandFilterComponent,
    ResetFilterRouteComponent,
    ProductListItemComponent,
    ShopAreaComponent,
    RelatedProductsComponent,
  ],
})
export class ShopModule {}
