import { Route, Routes } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'authentication',
  },
  {
    path: 'authentication',
    loadChildren: () => import('./remote-entry/entry.routes'),
  },
] as Routes;
