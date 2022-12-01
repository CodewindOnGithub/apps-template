import { Routes } from '@angular/router';
import { provideAuthenticationDomain } from '@authentication/domain';
import { LoginComponent } from './login.component';

export default [
  {
    path: '',
    providers: provideAuthenticationDomain(),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'start',
      },
      {
        path: 'start',
        component: LoginComponent,
      },
    ],
  },
] as Routes;
