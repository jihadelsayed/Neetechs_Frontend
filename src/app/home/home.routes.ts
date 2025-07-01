import { Routes } from '@angular/router';

export const homeRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('../pages/homepage/homepage.component').then(m => m.HomepageComponent),
  },
];
