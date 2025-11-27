import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-testimonials',
  imports: [CommonModule],
  templateUrl: './home-testimonials.component.html',
  styleUrl: './home-testimonials.component.scss',
})
export class HomeTestimonialsComponent {
  testimonials = [
    {
      text: 'Neetechs provided exceptional service and support for our website redesign. Their team was professional, responsive, and delivered a product that exceeded our expectations.',
      author: 'John Doe, CEO of Tech Solutions',
    },
    {
      text: 'I highly recommend Neetechs for mobile app development. They turned our vision into reality with a user-friendly and visually appealing app. The project was completed on time and within budget.',
      author: 'Jane Smith, Founder of Mobile Innovators',
    },
    {
      text: 'The technical repair services provided by Neetechs were outstanding. They quickly diagnosed and fixed the issues with our laptops, and their customer service was top-notch.',
      author: 'Mike Johnson, IT Manager at Business Corp',
    },
  ];

  currentTestimonialIndex = 0;

  constructor(private router: Router) {}

  getTestimonialsTransform() {
    return `translateX(-${this.currentTestimonialIndex * 100}%)`;
  }

  prevTestimonial() {
    this.currentTestimonialIndex =
      this.currentTestimonialIndex > 0
        ? this.currentTestimonialIndex - 1
        : this.testimonials.length - 1;
  }

  nextTestimonial() {
    this.currentTestimonialIndex =
      this.currentTestimonialIndex < this.testimonials.length - 1
        ? this.currentTestimonialIndex + 1
        : 0;
  }

  goToTestimonial(index: number) {
    this.currentTestimonialIndex = index;
  }

  navigateTo(url: string): void {
    window.scrollTo(0, 0);
    this.router.navigate([url]);
  }
}
