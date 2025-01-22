import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FeatureDownloadComponent } from './feature-download/feature-download.component';
import { FeatureTvComponent } from './feature-tv/feature-tv.component';
import { AuthService } from '../../../services/auth.service';
import { MovieService } from '../../../services/movie.service';


@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, RouterLink, FeatureDownloadComponent, FeatureTvComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  isAuthenticated: boolean = false; 
  email: string = "";

  movieSearch: string = ""

  constructor(private router: Router, private authService: AuthService, private movieService: MovieService){}
  
  ngOnInit(): void {
    
    this.authService.isAuthenticated$.subscribe((authStatus) => {
      this.isAuthenticated = authStatus;
    });
  }

  

  getStarted(): void{
    if(this.movieSearch.trim()){
       this.router.navigate(['/movie-list'], {queryParams: {search: this.movieSearch}})
    }
    else{
      console.log("empty input");
    }
  }

}
