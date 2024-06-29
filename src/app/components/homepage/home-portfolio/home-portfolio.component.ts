import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-portfolio.component.html',
  styleUrl: './home-portfolio.component.scss'
})
export class HomePortfolioComponent {
  projects = [
    {
      image: 'https://live.staticflickr.com/65535/53787105776_c50c7baf00.jpg',
      title: 'Project Title 1',
      side:'',
      description: 'Description of Project 1. This project involved designing a website for a local business, incorporating modern design principles and ensuring a responsive layout.'
    },
    {
      image: 'https://live.staticflickr.com/65535/53787525695_a35314b5bf.jpg',
      title: 'Project Title 2',
      side:'flex-reverse',

      description: 'Description of Project 2. This project involved developing a mobile app for an e-commerce platform, focusing on user experience and seamless functionality.'
    },
    {
      image: 'https://live.staticflickr.com/65535/53786164737_8ecdc5cf96.jpg',
      title: 'Project Title 3',
      side:'',
      description: 'Description of Project 3. This project involved providing technical repair services for a series of laptops, ensuring they were fully functional and optimized for performance.'
    }
  ];

  currentIndex = 0;

  getTransform() {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.projects.length - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex < this.projects.length - 1) ? this.currentIndex + 1 : 0;
  }
}
