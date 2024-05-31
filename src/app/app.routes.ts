import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./icon/icon.page'),
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page'),
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.page'),
    children: [
      {
        path: 'cellphone',
        loadComponent: () => import('./register/pages/cellphone/cellphone.page')
      },
      {
        path: 'account',
        loadComponent: () => import('./register/pages/account/account.page')
      },
      {
        path: 'end',
        loadComponent: () => import('./register/pages/end/end.page')
      },
      {
        path: '**',
        redirectTo: 'cellphone',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'welcome',
    loadComponent: () => import('./welcome/welcome.page')
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
