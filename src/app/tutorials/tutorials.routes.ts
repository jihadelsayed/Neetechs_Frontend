import { Routes } from '@angular/router';

export const tutorialsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('../pages/tutorials/tutorials.component').then(m => m.TutorialsComponent),
  },
  {
    path: ':categoriesId/:tutorialId',
    loadComponent: () => import('../pages/tutorials/tutorial/tutorial.component').then(m => m.TutorialComponent),
  },
  {
    path: ':categoriesId',
    loadComponent: () => import('../pages/tutorials/tutorials-categories/tutorials-categories.component').then(m => m.TutorialsCategoriesComponent),
  },
];
