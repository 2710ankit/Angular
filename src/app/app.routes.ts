import { Routes } from '@angular/router';
import { authGuard, loginGuard } from './gaurds/auth.gaurd';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
    children: [
      {
        path: 'tasks',
        loadComponent: () =>
          import('./components/tasks/tasks.component').then(
            (m) => m.TasksComponent
          ),
        canActivate: [authGuard],
      },
      {
        path: 'create',
        loadComponent: () =>
          import('./components/create-task/create-task.component').then(
            (m) => m.CreateTaskComponent
          ),
        canActivate: [authGuard],
      },
    ],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then(
        (m) => m.LoginComponent
      ),
    canActivate: [loginGuard],
  },

  {
    path: '*',
    redirectTo: '/',
  },
];
