import { Component } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
imports: [RouterOutlet, FooterComponent, HeaderComponent, NgIf],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'neetechs';

  constructor() {

  }


}
