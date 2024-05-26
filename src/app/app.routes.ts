import { Routes } from '@angular/router';
import { authGuard, homeGuard } from './gaurds/auth.gaurd';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
    canMatch: [homeGuard],
    children: [
      {
        path: 'tasks',
        loadComponent: () =>
          import('./components/tasks/tasks.component').then(
            (m) => m.TasksComponent
          ),
        // canMatch: [canMatchGuard],
        // canMatch: [authGuard],
      },
      {
        path: 'create',
        loadComponent: () =>
          import('./components/create-task/create-task.component').then(
            (m) => m.CreateTaskComponent
          ),
        // canMatch: [authGuard],
      },
    ],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then(
        (m) => m.LoginComponent
      ),
    // canMatch: [homeGuard],
  },

  {
    path: '*',
    redirectTo:"/"
    // canMatch: [homeGuard],
  },
];
