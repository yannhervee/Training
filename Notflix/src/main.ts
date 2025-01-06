import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http'; 

import { MovieListComponent } from './app/components/movie-list/movie-list.component';

bootstrapApplication(MovieListComponent, {
  providers: [
    provideHttpClient(),
    ...appConfig.providers, 
  ],

})
  .catch((err) => console.error(err));
