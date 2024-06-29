import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-team.component.html',
  styleUrl: './home-team.component.scss'
})
export class HomeTeamComponent {
  teamMembers = [
    {
      img: 'https://live.staticflickr.com/65535/53787417204_593435e109.jpg',
      name: 'John Doe - CEO',
      description: 'John is the visionary behind Neetechs, with over 20 years of experience in the tech industry. He is passionate about driving innovation and leading the company to new heights.'
    },
    {
      img: 'https://live.staticflickr.com/65535/53787314183_b005a7b766.jpg',
      name: 'Jane Smith - CTO',
      description: 'Jane is responsible for overseeing all technical aspects of Neetechs. Her expertise in software development and system architecture is instrumental in delivering top-notch solutions to our clients.'
    },
    {
      img: 'https://live.staticflickr.com/65535/53787417224_93a1ba00aa.jpg',
      name: 'Emily Johnson - Lead Designer',
      description: 'Emily leads our design team, bringing a creative and user-centric approach to every project. Her keen eye for detail ensures that our designs are not only beautiful but also functional.'
    },
    // Add more team members as needed
  ];

  currentIndex = 0;
  slidesToShow = 3; // Default to 3 slides

  // @HostListener('window:resize', ['$event'])
  // onResize(event: any) {
  //   this.updateSlidesToShow();
  // }

  ngOnInit() {
    this.updateSlidesToShow();
  }

  updateSlidesToShow() {
    const width = window.innerWidth;
    if (width <= 500) {
      this.slidesToShow = 1;
    } else if (width <= 800) {
      this.slidesToShow = 2;
    } else {
      this.slidesToShow = 3;
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex -= this.slidesToShow;
    }
  }

  nextSlide() {
    if (this.currentIndex < this.teamMembers.length - this.slidesToShow) {
      this.currentIndex += this.slidesToShow;
    }
  }

  isVisible(index: number): boolean {
    return index >= this.currentIndex && index < this.currentIndex + this.slidesToShow;
  }
}
