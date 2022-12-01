import { Routes } from '@angular/router';

export default [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    loadChildren: () => import('@authentication/feature-login/routes'),
  },
] as Routes;
