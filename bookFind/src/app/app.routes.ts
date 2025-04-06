import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { BooksComponent } from './Components/books/books.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
  { path: 'booklist', component: BooksComponent }
];
