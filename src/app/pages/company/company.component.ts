import { Component } from '@angular/core';
import { AboutComponent } from "../about-us/about.component";
import { ContactUsComponent } from "../contact-us/contact-us.component";

@Component({
  selector: 'app-company',
  imports: [AboutComponent, ContactUsComponent],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})
export class CompanyComponent {

}
