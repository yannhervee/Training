import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http'; 
import { routes } from './app/app.routes';

import { MovieListComponent } from './app/components/movie-list/movie-list.component';
import { provideRouter } from '@angular/router';
import { authInterceptor } from './interceptors/auth';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), 
    provideHttpClient(withInterceptors([authInterceptor])),
    ...appConfig.providers, 
  ],

})
  .catch((err) => console.error(err));
