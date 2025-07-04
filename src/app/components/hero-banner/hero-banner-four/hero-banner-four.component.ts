import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
register();

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  selector: 'app-hero-banner-four',
  templateUrl: './hero-banner-four.component.html',
  styleUrls: ['./hero-banner-four.component.scss']
})
export class HeroBannerFourComponent {
  thumbsSwiper: any;
  play: boolean = false;
  setThumbsSwiper(swiper: any) {
    this.thumbsSwiper = swiper;
  }
  handleVideoPlay() {
  const videos = document.querySelectorAll(".tp-slider-video video");
  if (this.play === false) {
    this.play = true;
    videos.forEach((video) => {
      const videoElement = video as HTMLVideoElement;
      videoElement.play();
    });
  } else {
    this.play = false;
      videoElement.pause();
}
  // slider data
public slider_data = [
  {
    subtitle: "The original",
    title: "Shine bright",
    img: "/assets/img/slider/4/slider-1.png",
    videoSrc: "http://weblearnbd.net/tphtml/videos/neetechs.com/jewellery-1.mp4#t=3",
  },
    title: "Creative Design",
    img: "/assets/img/slider/4/slider-2.png",
    title: "Gold Plateted",
    img: "/assets/img/slider/4/slider-3.png",
    title: "Unique shapes",
    img: "/assets/img/slider/4/slider-4.png",
];
// slider nav data
public slider_nav_data = [
  { icon: "/assets/img/slider/4/nav/icon-1.png", title: "Ring <br />& Earring" },
  { icon: "/assets/img/slider/4/nav/icon-2.png", title: "Bangles & <br />Bracelets" },
  { icon: "/assets/img/slider/4/nav/icon-3.png", title: "Drop <br /> Necklaces" },
  { icon: "/assets/img/slider/4/nav/icon-4.png", title: "Diamond <br /> Necklaces" }
  ngOnInit(){
    const swiper = new Swiper(".tp-slider-nav-active", {
      spaceBetween: 10,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
      direction: 'vertical',
     new Swiper(".tp-slider-active-4", {
      slidesPerView: 1,
      spaceBetween: 0,
      effect: 'fade',
      thumbs: {
        swiper: swiper,
      },
      navigation: {
        nextEl: ".tp-slider-3-button-next",
        prevEl: ".tp-slider-3-button-prev",
