import { Component } from '@angular/core';
import { ServicesHeroComponent } from './services-hero/services-hero.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ServicesHeroComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
