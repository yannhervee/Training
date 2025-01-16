import { Routes } from '@angular/router';
import { DirectoryComponent } from './components/directory/directory.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    {path: '', component: DirectoryComponent},
    {path: 'directory', component: DirectoryComponent},
    {path: 'contactus', component: ContactComponent},
    {path: 'about', component: AboutComponent},
];
