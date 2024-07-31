import { Component } from '@angular/core';
import { HomePortfolioComponent } from "./home-portfolio/home-portfolio.component";
import { HomeTestimonialsComponent } from "./home-testimonials/home-testimonials.component";
import { HomeTeamComponent } from "./home-team/home-team.component";
import { HomeMainComponent } from "./home-main/home-main.component";
import { HomeServicesComponent } from "./home-services/home-services.component";
import { HomeContactComponent } from "./home-contact/home-contact.component";
import { ContactBannerComponent } from "../shared/contact-banner/contact-banner.component";

@Component({
    selector: 'app-homepage',
    standalone: true,
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.scss',
    imports: [HomePortfolioComponent, HomeTestimonialsComponent, HomeTeamComponent, HomeMainComponent, HomeServicesComponent, HomeContactComponent, ContactBannerComponent]
})
export class HomepageComponent {

}
