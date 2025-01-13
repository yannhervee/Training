import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { MovieDetail } from '../../../services/interfaces/movieDetails';
import { MovieBannerComponent } from './movie-banner/movie-banner.component';
import { MovieProductionComponent } from './movie-production/movie-production.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-movie',
  imports: [CommonModule, MovieBannerComponent, MovieProductionComponent, NavBarComponent],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit{
  movie!: MovieDetail | null;
  constructor(private movieService : MovieService){

  }
  ngOnInit(): void {
    this.movieService.selectedMovie$.subscribe((movie) => {
      this.movie = movie;
      // console.log("movie is " , this.movie)
      // console.log('Production Companies:', movie?.production_companies);
    })
  }

}
