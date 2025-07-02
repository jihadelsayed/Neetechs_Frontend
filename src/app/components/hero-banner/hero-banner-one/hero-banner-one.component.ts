import { sliderData } from '@/data/hero-slider-data';
import { CurrencyService } from '@/shared/header/header-com/header-top-bar/currency.service';
import { ISliderData } from '@/types/slider-type';
import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination,EffectFade } from 'swiper/modules';


@Component({
  selector: 'app-hero-banner-one',
  templateUrl: './hero-banner-one.component.html',
  styleUrls: ['./hero-banner-one.component.scss']
})
export class HeroBannerOneComponent {

  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  public swiperInstance: Swiper | undefined;
  public swiperIndex: number = 0;
  constructor(public currencyService: CurrencyService) {}

  public HomeSliderData: ISliderData[] = sliderData;

  getCurrencySymbol(): string {
    const currentCurrency = this.currencyService.getCurrentCurrency();
    return currentCurrency ? currentCurrency.symbol : ''; // Return an empty string or handle the default case as needed
  }


  ngAfterViewInit() {
    if (this.swiperContainer) {
      this.swiperInstance = new Swiper('.tp-slider-active', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: false,
        effect : 'fade',
        modules:[EffectFade,Pagination],
        pagination: {
          el: ".tp-slider-dot",
          clickable: true
        },
        on: {
          slideChange: () => {
            this.swiperIndex = this.swiperInstance?.realIndex || 0;
          }
        }
      })
    }
  }
}
