import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-tutorial-ads',
    imports: [],
    templateUrl: './tutorial-ads.component.html',
    styleUrl: './tutorial-ads.component.scss'
})
export class TutorialAdsComponent {
  constructor(private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
   if (isPlatformBrowser(this.platformId)) {
      this.loadAd(); // Safe to access document here
    }  }

  loadAd() {
    const adScript = this.renderer.createElement('script');
    adScript.type = 'text/javascript';
    adScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    adScript.async = true;
    adScript.crossOrigin = 'anonymous';
    this.renderer.appendChild(document.body, adScript);

    const adIns = this.renderer.createElement('ins');
    this.renderer.setAttribute(adIns, 'class', 'adsbygoogle');
    this.renderer.setAttribute(adIns, 'style', 'display:block; text-align:center;');
    this.renderer.setAttribute(adIns, 'data-ad-layout', 'in-article');
    this.renderer.setAttribute(adIns, 'data-ad-format', 'fluid');
    this.renderer.setAttribute(adIns, 'data-ad-client', 'ca-pub-6506079360753286');
    this.renderer.setAttribute(adIns, 'data-ad-slot', '8502294943');
    this.renderer.appendChild(document.querySelector('.ad-container'), adIns);

    const pushScript = this.renderer.createElement('script');
    pushScript.type = 'text/javascript';
    pushScript.text = '(adsbygoogle = window.adsbygoogle || []).push({});';
    this.renderer.appendChild(document.querySelector('.ad-container'), pushScript);
  }
}
