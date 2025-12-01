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
    loadChildren: () => import('./components/tools/tools.routes').then(m => m.toolsRoutes),
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
    path: 'about',
    loadComponent: () => import('./pages/about-us/about-us.component').then(m => m.AboutUsComponent),
  },
  {
    path: 'contact',
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
    path: 'coupon',
    loadComponent: () => import('./pages/coupon/coupon.component').then(m => m.CouponComponent),
  },
  {
    path: 'faq',
    loadComponent: () => import('./pages/faq/faq.component').then(m => m.FaqComponent),
  },
  {
    path: 'cookies-policy',
    loadComponent: () => import('./pages/cookies-policy/cookies-policy.component').then(m => m.CookiesPolicyComponent),
  },
  {
    path: 'job-application',
    loadComponent: () => import('./pages/job-application/job-application.component').then(m => m.JobApplicationComponent),
  },
  {
    path: 'user-guides',
    loadComponent: () => import('./pages/user-guides/user-guides.component').then(m => m.UserGuidesComponent),
  },
  {
    path: 'careers',
    loadComponent: () => import('./pages/careers/careers.component').then(m => m.CareersComponent),
  },
  {
    path: 'blog',
    loadComponent: () => import('./pages/blog-news/blog-news.component').then(m => m.BlogNewsComponent),
  },
  {
    path: 'blog/:categoriesId',
    loadComponent: () => import('./pages/blog-news/blog-news-categories/blog-news-categories.component').then(m => m.BlogNewsCategoriesComponent),
  },
  {
    path: 'blog/:categoriesId/:blogId',
    loadComponent: () => import('./pages/blog-news/blog/blog.component').then(m => m.BlogComponent),
  },
  {
  path: 'digital-products',
  loadComponent: () =>
    import('./pages/digital-products/digital-products-list/digital-products-list.component')
      .then(m => m.DigitalProductsListComponent)
},
{
  path: 'digital-products/:slug',
  loadComponent: () =>
    import('./pages/digital-products/digital-product-page/digital-product-page.component')
      .then(m => m.DigitalProductPageComponent)
},
  {
    path: '**',
    redirectTo: '',
  },
];
