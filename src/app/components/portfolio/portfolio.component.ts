import { Component } from '@angular/core';
import { ContactBannerComponent } from "../shared/contact-banner/contact-banner.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ContactBannerComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
