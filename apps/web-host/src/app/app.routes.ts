import { Route } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mf';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
  {
    path: 'authentication-shell-web',
    loadChildren: () =>
      loadRemoteModule('authentication-shell-web', './Routes'),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
