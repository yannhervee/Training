import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WishListPageComponent } from './components/wish-list-page/wish-list-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent }, 
  { path: 'wishlist', component: WishListPageComponent },
];
