import { Component } from '@angular/core';
import { ContactUsComponent } from "../contact-us/contact-us.component";
import { AboutUsComponent } from '../about-us/about-us.component';

@Component({
  selector: 'app-company',
  imports: [AboutUsComponent, ContactUsComponent],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})
export class CompanyComponent {

}
