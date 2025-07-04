import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  selector: 'app-instagram-area-one',
  templateUrl: './instagram-area-one.component.html',
  styleUrls: ['./instagram-area-one.component.scss']
})
export class InstagramAreaOneComponent {
   // instagram data
   public instagram_data = [
    {
      id: 1,
      link: 'https://www.instagram.com/',
      img: '/assets/img/instagram/instagram-1.jpg',
    },
      id: 2,
      img: '/assets/img/instagram/instagram-2.jpg',
      id: 3,
      img: '/assets/img/instagram/instagram-3.jpg',
      id: 4,
      img: '/assets/img/instagram/instagram-4.jpg',
      id: 5,
      img: '/assets/img/instagram/instagram-5.jpg',
  ];
}
