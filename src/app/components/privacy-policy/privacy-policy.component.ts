import { Component } from '@angular/core';
import { ContactBannerComponent } from "../shared/contact-banner/contact-banner.component";

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [ContactBannerComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

}
