import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { MovieListComponent } from './app/components/movie-list/movie-list.component';
bootstrapApplication(MovieListComponent, appConfig)
  .catch((err) => console.error(err));
