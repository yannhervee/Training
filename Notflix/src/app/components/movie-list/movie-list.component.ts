import { CommonModule } from '@angular/common';
import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MovieService } from '../../../services/movie.service';
import { Movie } from '../../../services/interfaces/movie';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ScrollService } from '../../../services/scroll.service';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, MovieItemComponent, FormsModule, InfiniteScrollModule],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];
  searchQuery: string = "";
  searchResults: Movie[] = [];
  isSearching: boolean = false;
  currentPage: number = 1; // Track the current page for infinite scroll
  totalPages: number = 0; // Track total pages returned by the API
  isLoading: boolean = false; // Prevent duplicate API calls during loading

  constructor(
    private movieService: MovieService, 
    private router: Router, 
    private route: ActivatedRoute, private scrollService: ScrollService
  ) { }

  // ngAfterViewInit(): void {
  //   const scrollPosition = this.scrollService.getScrollPosition();
  //   console.log('Restoring scroll position:', scrollPosition); // Debug log
  //   // window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
  //   setTimeout(() => {
  //     console.log('Restoring scroll position:', scrollPosition); // Debug log
  //     window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
  //   }, 100); // Adjust delay if needed
  // }

  ngOnInit(): void {
    // Initial load of movies
    this.loadMovies();
    const scrollPosition = this.scrollService.getScrollPosition();
    console.log('Restoring scroll position:', scrollPosition); // Debug log
    
    setTimeout(() => {
      console.log('Restoring scroll position:', scrollPosition); // Debug log
      window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    }, 100); // Adjust delay if needed
  
    // Handle search functionality
    this.route.queryParams.subscribe((params) => {
      this.searchQuery = params['search'];
      if (this.searchQuery) {
        this.isSearching = true;
        this.movieService.searchMovies(this.searchQuery).subscribe((response: Movie[]) => {
          console.log("Search movie result:", response);
          this.searchResults = response;
        });
      } else {
        this.isSearching = false;
        this.searchResults = [];
      }
    });
  }

  loadMovies(): void {
    if (this.isLoading || this.isSearching) return; // Prevent loading if already searching or fetching
    this.isLoading = true;

    this.movieService.getMoviesByPage(this.currentPage).subscribe({
      next: (response: { results: Movie[]; total_pages: number }) => {
        console.log("Movies fetched:", response.results);
        this.movies = [...this.movies, ...response.results];
        this.totalPages = response.total_pages;
        this.currentPage++;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching movies:', err);
        this.isLoading = false;
      }
    });
  }

  onScroll(): void {
    console.log("current scroll pos ", window.scrollY);
    if (this.currentPage <= this.totalPages) {
      console.log("Infinite scroll triggered. Loading more movies...");
      this.loadMovies();
    }
  }

  onSelectMovie(movie: Movie): void {
    const currentScrollPosition = window.scrollY;
    console.log('Saving scroll position:', currentScrollPosition); // Debug log
    this.scrollService.setScrollPosition(currentScrollPosition);
    const userRole = localStorage.getItem('user_role');
    if (userRole === "USER") {
      console.log("User role detected: Redirecting to register-plan.");
      this.router.navigate(['/register-plan']);
    } else {
      console.log("Authorized user: Navigating to movie details.");
      this.movieService.setSelectedMovie(movie.id);
      this.router.navigate(['/movie-details', movie.id]);
    }
  }
}
