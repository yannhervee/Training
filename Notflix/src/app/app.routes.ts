import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterUsernameComponent } from './components/register-username/register-username.component';
import { RegisterPlanComponent } from './components/register-plan/register-plan.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieComponent } from './components/movie/movie.component';
import { noAuthGuard } from '../guards/no-auth.guard';
import { authGuard } from '../guards/auth.guard';
import { roleGuard } from '../guards/role.guard';

export const routes: Routes = [
    // { path: '', component: HomeComponent }, // Default route (Home)
    // { path: 'login', component: LoginComponent },
    // { path: 'register', component: RegisterComponent },
    // { path: 'register-info', component: RegisterUsernameComponent },
    // { path: 'register-plan', component: RegisterPlanComponent },
    // { path: 'movie-list', component: MovieListComponent },
    // { path: 'movie-details', component: MovieComponent },

    { 
        path: '', 
        loadComponent: () => 
          import('./components/home/home.component').then((m) => m.HomeComponent),
      }, // Default route (Home)
      { 
        path: 'home', 
        loadComponent: () => 
          import('./components/home/home.component').then((m) => m.HomeComponent),
      }, // Default route (Home)
      { 
        path: 'login', 
        loadComponent: () => 
          import('./components/login/login.component').then((m) => m.LoginComponent),
        canActivate: [noAuthGuard],
      },
      { 
        path: 'register', 
        loadComponent: () => 
          import('./components/register/register.component').then((m) => m.RegisterComponent),
        canActivate: [noAuthGuard],
      },
      { 
        path: 'register-info', 
        loadComponent: () => 
          import('./components/register-username/register-username.component').then(
            (m) => m.RegisterUsernameComponent
          ),
          canActivate: [noAuthGuard],
      },
      { 
        path: 'register-plan', 
        loadComponent: () => 
          import('./components/register-plan/register-plan.component').then(
            (m) => m.RegisterPlanComponent
          ),
          // canActivate: [noAuthGuard],
      },
      { 
        path: 'movie-list', 
        loadComponent: () => 
          import('./components/movie-list/movie-list.component').then(
            (m) => m.MovieListComponent
          ),
          canActivate: [authGuard],
      },
      { 
        path: 'movie-details/:id', 
        loadComponent: () => 
          import('./components/movie/movie.component').then((m) => m.MovieComponent),
        canActivate: [authGuard, roleGuard],
      },
];
