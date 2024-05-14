import { Routes } from '@angular/router';
import { AnimateComponent } from './pages/animate/animate.component';
import { CookieComponent } from './pages/cookie/cookie.component';
import { Analytics4Component } from './pages/analytics4/analytics4.component';
import { IvsComponent } from './pages/ivs/ivs.component';

export const routes: Routes = [
  {
  path: '',
  component: AnimateComponent
  },
  {
    path: 'cookie',
    component: CookieComponent
  },
  {
    path: 'analytics4',
    component: Analytics4Component
  },
  {
    path: 'ivs',
    component: IvsComponent
  },
];
