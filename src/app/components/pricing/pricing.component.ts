import { Component } from '@angular/core';
import { ContactBannerComponent } from "../../shared/contact-banner/contact-banner.component";
import { PricingService } from './pricing.service';
import { CommonModule } from '@angular/common';
import { ServiceCategory } from './pricing.model';

@Component({
    selector: 'app-pricing',
    imports: [ContactBannerComponent, CommonModule],
    providers: [PricingService],
    templateUrl: './pricing.component.html',
    styleUrl: './pricing.component.scss'
})
export class PricingComponent {

  pricing: ServiceCategory | undefined;

  constructor(private pricingService: PricingService) { }

  ngOnInit(): void {
    this.pricingService.getPricingData().subscribe(
      (data: ServiceCategory) => {
        this.pricing = data;
      },
      (error) => {
        console.error('Error fetching pricing data:', error);
      }
    );
  }
}
