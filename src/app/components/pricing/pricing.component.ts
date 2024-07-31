import { Component } from '@angular/core';
import { ContactBannerComponent } from "../shared/contact-banner/contact-banner.component";

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [ContactBannerComponent],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {

}
