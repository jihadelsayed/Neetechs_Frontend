import { Component } from '@angular/core';
import { HomePortfolioComponent } from "./home-portfolio/home-portfolio.component";
import { HomeTestimonialsComponent } from "./home-testimonials/home-testimonials.component";
import { HomeMainComponent } from "./home-main/home-main.component";
import { HomeServicesComponent } from "./home-services/home-services.component";
import { ContactBannerComponent } from "../../shared/contact-banner/contact-banner.component";

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.scss',
    imports: [HomePortfolioComponent, HomeTestimonialsComponent, HomeMainComponent, HomeServicesComponent, ContactBannerComponent]
})
export class HomepageComponent {

}
