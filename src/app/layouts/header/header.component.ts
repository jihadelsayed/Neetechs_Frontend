import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CartService } from '../../core/cart.service';
import { WishlistService } from '../../core/wishlist.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';
import { UtilsService } from '../../core/utils.service';
import { IProduct } from '../../types/product-type';
import { ShopHeaderComponent } from '../../store/shop-header/shop-header.component';
import { LayoutService } from '@/services/layout.service';
import { DesktopHeaderComponent } from './desktop-header/desktop-header.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    MobileHeaderComponent,
    ShopHeaderComponent,
    DesktopHeaderComponent,
  ],
})
export class HeaderComponent {
  public products: IProduct[] = [];
  public searchText: string = '';
  public productType: string = '';
  isMobile: boolean = false;
  headerSticky: boolean = false;
  showShopHeader = false;

  name: string | null = null;
  fullname: string | null = null;
  email: string | null = null;
  twitter: string | null = null;
  facebook: string | null = null;
  gender: string | null = null;
  phone: string | null = null;
  address: string | null = null;
  description: string | null = null;

  private scrollTimeout: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public cartService: CartService,
    public wishlistService: WishlistService,
    public utilsService: UtilsService,
    private layoutService: LayoutService,
    private router: Router
  ) {
    this.layoutService.showShopHeader$.subscribe(
      (v) => (this.showShopHeader = v)
    );
  }

  checkWindowSize(width: number) {
    this.isMobile = width <= 640;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (isPlatformBrowser(this.platformId)) {
      this.checkWindowSize(event.target.innerWidth);
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if (!isPlatformBrowser(this.platformId)) return;

    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      this.headerSticky = window.scrollY > 180;
    }, 50);
  }

  public niceSelectOptions = [
    { value: 'select-category', text: 'Select Category' },
    { value: 'electronics', text: 'Electronics' },
  ];

  changeHandler(selectedOption: { value: string; text: string }) {
    this.productType = selectedOption.value;
  }

  handleSearchSubmit() {
    const queryParams: { [key: string]: string | null } = {};
    if (!this.searchText && !this.productType) {
      return;
    }

    if (this.searchText) {
      queryParams['searchText'] = this.searchText;
    }
    if (this.productType) {
      queryParams['productType'] = this.productType;
    }

    this.router.navigate(['/search'], { queryParams });
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (window.innerWidth) {
        this.checkWindowSize(window.innerWidth);
      }
    }

    if (typeof localStorage !== 'undefined') {
      const userInfoString = localStorage.getItem('userInfo');
      const userInfo = userInfoString ? JSON.parse(userInfoString) : null;

      if (userInfo) {
        const name = userInfo['name'];
        const names = name.split(' ');
        const capitalized = names
          .map(
            (n: string) => n.charAt(0).toUpperCase() + n.slice(1)
          )
          .join(' ');
        const firstName = name.split(' ')[0].toUpperCase();

        this.name = firstName;
        this.email = userInfo['email'];
        this.twitter = userInfo['twitter'];
        this.facebook = userInfo['facebook'];
        this.phone = userInfo['telephone'];
        this.gender = userInfo['gender'];
        this.address = userInfo['address'];
        this.description = userInfo['description'];
        this.fullname = capitalized;
      } else {
        this.name = 'Sign In';
      }
    }
  }
}
