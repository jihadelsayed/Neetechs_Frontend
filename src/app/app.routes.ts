import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.routes').then(m => m.homeRoutes),
  },
  {
    path: 'services',
    loadChildren: () => import('./services/services.routes').then(m => m.servicesRoutes),
  },
  {
    path: 'tutorials',
    loadChildren: () => import('./tutorials/tutorials.routes').then(m => m.tutorialsRoutes),
  },
  {
    path: 'tools',
    loadChildren: () => import('./tools/tools.routes').then(m => m.toolsRoutes),
  },
  {
    path: 'shop',
    loadChildren: () => import('./store/store.routes').then(m => m.storeRoutes),
  },
  {
    path: 'pricing',
    loadComponent: () => import('./components/pricing/pricing.component').then(m => m.PricingComponent),
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./components/portfolio/portfolio.component').then(m => m.PortfolioComponent),
  },
  {
    path: 'sitemap',
    loadComponent: () => import('./components/sitemap/sitemap.component').then(m => m.SitemapComponent),
  },
  {
    path: 'about-us',
    loadComponent: () => import('./pages/about-us/about-us.component').then(m => m.AboutUsComponent),
  },
  {
    path: 'contact-us',
    loadComponent: () => import('./pages/contact-us/contact-us.component').then(m => m.ContactUsComponent),
  },
  {
    path: 'privacy-policy',
    loadComponent: () => import('./components/privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent),
  },
  {
    path: 'terms-of-service',
    loadComponent: () => import('./pages/terms-of-service/terms-of-service.component').then(m => m.TermsOfServiceComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
