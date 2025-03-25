import { Component } from '@angular/core';
import { ServicesHeroComponent } from './services-hero/services-hero.component';
import { CommonModule } from '@angular/common';
import { ServicesService } from './services.service';
import { Router } from '@angular/router';
import { ContactBannerComponent } from '../../shared/contact-banner/contact-banner.component';

@Component({
  selector: 'app-services',
  standalone: true,
  providers: [ServicesService],

  imports: [ServicesHeroComponent, CommonModule, ContactBannerComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services:any;
  constructor(private servicesService: ServicesService,private router: Router) { }

  ngOnInit(): void {
    this.servicesService.getServicesData().subscribe((data:any) => {
      this.services = data.services;
    });
  }
  navigateTo(url: string): void {
    this.router.navigate([url]);
  }
}
