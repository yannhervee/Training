import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MovieDetail } from '../../../../services/interfaces/movieDetails';
import { MovieService } from '../../../../services/movie.service';
import { YouTubePlayerModule } from '@angular/youtube-player'; 

@Component({
  selector: 'app-movie-banner',
  imports: [CommonModule, YouTubePlayerModule],
  templateUrl: './movie-banner.component.html',
  styleUrl: './movie-banner.component.css'
})
export class MovieBannerComponent implements OnInit{
  @Input() movie!: MovieDetail;
  modalOpen: boolean = false;

  genresString: string = '';
  videoId!: string;

  constructor(private movieService : MovieService){}

  ngOnInit(): void {
    if (this.movie && this.movie.genres) {
      this.genresString = this.movie.genres.map((g) => g.name).join(', ');
    }
  }

  openModal(): void {
    this.movieService.getMovieTrailers(this.movie.id).subscribe((videos) => {
      if (videos.length > 0) {
        this.videoId = videos[0].key; 
        this.modalOpen = true;
      } else {
        alert('No trailers available.');
      }
    });
  }

  closeModal(): void {
    this.modalOpen = false;
    this.videoId = ''; 
  }

}
