import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MovieService } from '../../../services/movie.service';
import { Movie } from '../../../services/interfaces/movie';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie-list',
  imports: [CommonModule, MovieItemComponent, FormsModule,],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit{

constructor(private movieService: MovieService, private router: Router, private route: ActivatedRoute){}
movies: Movie[] =[]
searchQuery: string ="";
searchResults: Movie[] = [];
isSearching: boolean = false;

ngOnInit(): void {
  this.movieService.getMovies().subscribe((response: Movie[]) => {
    console.log("fetch result ", response)
    this.movies = response; 
    });

    this.route.queryParams.subscribe((params) => {
      this.searchQuery = params['search']

      if(this.searchQuery){
        this.isSearching = true;
        this.movieService.searchMovies(this.searchQuery).subscribe((response: Movie[]) => {
          console.log("search movie result", response);
          this.searchResults = response
        })
      }else{
        this.isSearching = false;
        this.searchResults =[]
      }
    })
  }

  onSelectMovie(movie: Movie): void{
    this.movieService.setSelectedMovie(movie.id);
    console.log("selected movie ", movie)
    this.router.navigate(['/movie-details'])
  }
}
