import { Component } from '@angular/core';
import { HomeHeroComponent } from "./home-hero/home-hero.component";
import { HomeCtaComponent } from './home-cta/home-cta.component';
import { HomeFeaturedProductsComponent } from './home-featured-products/home-featured-products.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { HomeHowItWorksComponent } from './home-how-it-works/home-how-it-works.component';
import { HomeTutorialsComponent } from './home-tutorials/home-tutorials.component';
import { HomeValueComponent } from './home-value/home-value.component';
// import { ContactBannerComponent } from "../../shared/contact-banner/contact-banner.component";

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss'],
    imports: [HomeHeroComponent, HomeCtaComponent, HomeFeaturedProductsComponent, HomeAboutComponent, HomeHowItWorksComponent, HomeTutorialsComponent, HomeValueComponent]
})
export class HomepageComponent {

}
