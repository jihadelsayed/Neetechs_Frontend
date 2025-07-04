import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Component, OnInit, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss']
})
export class BackToTopComponent {
  showBackToTopBtn = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if(window.scrollY > 200){
      this.showBackToTopBtn = true;
    }
    else {
      this.showBackToTopBtn = false;
  }}
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
}