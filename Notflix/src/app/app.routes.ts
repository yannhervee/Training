import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterUsernameComponent } from './components/register-username/register-username.component';
import { RegisterPlanComponent } from './components/register-plan/register-plan.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieComponent } from './components/movie/movie.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Default route (Home)
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'register-info', component: RegisterUsernameComponent },
    { path: 'register-plan', component: RegisterPlanComponent },
    { path: 'movie-list', component: MovieListComponent },
    { path: 'movie-details', component: MovieComponent },
];
