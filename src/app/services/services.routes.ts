import { Routes } from '@angular/router';

export const servicesRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('../components/services/services.component').then(m => m.ServicesComponent),
  },
  {
    path: 'graphic-design',
    loadComponent: () => import('../components/services/design-services/graphic-design/graphic-design.component').then(m => m.GraphicDesignComponent),
  },
  {
    path: 'ui-ux-design',
    loadComponent: () => import('../components/services/design-services/ui-ux-design/ui-ux-design.component').then(m => m.UiUxDesignComponent),
  },
  {
    path: 'web-development',
    loadComponent: () => import('../components/services/programming-services/web-development/web-development.component').then(m => m.WebDevelopmentComponent),
  },
  {
    path: 'mobile-app-development',
    loadComponent: () => import('../components/services/programming-services/mobile-app-development/mobile-app-development.component').then(m => m.MobileAppDevelopmentComponent),
  },
  {
    path: 'backend-development',
    loadComponent: () => import('../components/services/programming-services/backend-development/backend-development.component').then(m => m.BackendDevelopmentComponent),
  },
  {
    path: 'mobile-device-repair',
    loadComponent: () => import('../components/services/technical-repair-services/mobile-device-repair/mobile-device-repair.component').then(m => m.MobileDeviceRepairComponent),
  },
  {
    path: 'computer-laptop-repair',
    loadComponent: () => import('../components/services/technical-repair-services/computer-laptop-repair/computer-laptop-repair.component').then(m => m.ComputerLaptopRepairComponent),
  },
  {
    path: 'maintenance-upgrades',
    loadComponent: () => import('../components/services/technical-repair-services/maintenance-upgrades/maintenance-upgrades.component').then(m => m.MaintenanceUpgradesComponent),
  },
  {
    path: ':categoriesId',
    loadComponent: () => import('../components/services/services-categories/services-categories.component').then(m => m.ServicesCategoriesComponent),
  },
];
