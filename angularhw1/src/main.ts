import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ChangeTitleComponent } from './app/change-title/change-title.component';
import { ShortenTextComponent } from './app/shorten-text/shorten-text.component';

bootstrapApplication(ChangeTitleComponent, appConfig)
  .catch((err) => console.error(err));
