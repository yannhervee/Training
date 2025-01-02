import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayResultComponent } from './display-result/display-result.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CommonModule } from '@angular/common';

import { HttpClient, HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-root',
  imports: [DisplayResultComponent, SearchBarComponent, CommonModule, HttpClientModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularhw2';
  constructor(private http: HttpClient) {
    console.log('HttpClient loaded:', !!this.http);
  }
}
