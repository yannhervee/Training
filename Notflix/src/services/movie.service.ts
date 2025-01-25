// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Subject, BehaviorSubject, Observable, tap, map, AsyncSubject } from 'rxjs';
// import { Movie } from './interfaces/movie';
// import { MovieDetail } from './interfaces/movieDetails';

// @Injectable({
//   providedIn: 'root'
// })
// export class MovieService {
//   private apiKey = 'd3a24da516a446b3ef83e91a800cddbc'; 
//   private baseUrl = 'https://api.themoviedb.org/3';

//   private moviesSubject = new BehaviorSubject<Movie[]>([]);
//   private selectedMovieSubject = new BehaviorSubject<MovieDetail | null>(null);
//   private searchMoviesSubject = new BehaviorSubject<Movie[]>([]);
//   searchMovie$ = this.searchMoviesSubject.asObservable();
//   selectedMovie$ = this.selectedMovieSubject.asObservable();


//   movies$ = this.moviesSubject.asObservable();
//   constructor(private http: HttpClient) {}
  

//   getMovies(): Observable<Movie[]> {
//     const url = `${this.baseUrl}/discover/movie?api_key=${this.apiKey}`;
//     console.log('Fetching data from movie api:', url); 
//     return this.http.get<{ results: Movie[] }>(url).pipe(
//       map((res) => res.results),
//       tap((res) => {
//         console.log('Response:', res);
//         this.moviesSubject.next(res);
//       })
//     );
//   }

//   searchMovies(query: string): Observable<Movie[]> {
//     const url = `${this.baseUrl}/search/movie?query=${encodeURIComponent(query)}&api_key=${this.apiKey}`;
//     console.log('Searching movies with query:', query);

//     return this.http.get<{ results: Movie[] }>(url).pipe(
//       map((res) => res.results),
//       tap((res) => {
//         console.log('Search Results:', res);
//         this.searchMoviesSubject.next(res);
       
//       })
//     )
//   }

//   setSelectedMovie(movieId: number): void {
//     console.log("id ", movieId);
//     const url = `${this.baseUrl}/movie/${movieId}?api_key=${this.apiKey}`;
//     console.log('Fetching movie details from movie api:', url); 
//     this.http.get<MovieDetail>(url).subscribe((movie) => {
//       console.log('Fetched movie details:', movie);
//       this.selectedMovieSubject.next(movie); 
//     });  
//   }
  
//   getSelectedMovie(): Observable<MovieDetail | null> {
//     console.log("select movie from service ", this.selectedMovie$)
//     return this.selectedMovie$;
//   }

//   getMovieTrailers(movieId: number): Observable<any> {
//     const url = `${this.baseUrl}/movie/${movieId}/videos?api_key=${this.apiKey}`;
//     return this.http.get<{ results: any[] }>(url).pipe(
//       map((res) => res.results.filter((video) => video.site === 'YouTube')) // Only get YouTube videos
//     );
//   }

//   clearData(): void {
//     this.moviesSubject.next([]);
//     this.searchMoviesSubject.next([]);
//     this.selectedMovieSubject.next(null);
//   }
  
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Movie } from './interfaces/movie';
import { MovieDetail } from './interfaces/movieDetails';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'http://localhost:5566/api/movies'; // Backend API URL

  private moviesSubject = new BehaviorSubject<Movie[]>([]);
  private selectedMovieSubject = new BehaviorSubject<MovieDetail | null>(null);
  private searchMoviesSubject = new BehaviorSubject<Movie[]>([]);

  movies$ = this.moviesSubject.asObservable();
  selectedMovie$ = this.selectedMovieSubject.asObservable();
  searchMovie$ = this.searchMoviesSubject.asObservable();

  constructor(private http: HttpClient) {}

  // getMovies(): Observable<Movie[]> {
  //   const url = `${this.apiUrl}/discover`;
  //   console.log('Fetching movies from backend:', url);
  //   return this.http.get<{ results: Movie[] }>(url).pipe(
  //     map((res) => res.results),
  //     tap((res) => {
  //       console.log('Movies fetched:', res);
  //       this.moviesSubject.next(res);
  //     })
  //   );
  // }

  getMovies(page: number = 1): Observable<Movie[]> {
    const url = `${this.apiUrl}/discover?page=${page}`;
    console.log(`Fetching movies from backend (page ${page}):`, url);
    return this.http.get<{ results: Movie[] }>(url).pipe(
      map((res) => res.results),
      tap((res) => {
        console.log('Movies fetched:', res);
        this.moviesSubject.next([...this.moviesSubject.value, ...res]); // Append new results
      })
    );
  }

  searchMovies(query: string): Observable<Movie[]> {
    const url = `${this.apiUrl}/search`;
    console.log('Searching movies with query:', query);
    return this.http
      .get<{ results: Movie[] }>(url, { params: { query } })
      .pipe(
        map((res) => res.results),
        tap((res) => {
          console.log('Search results:', res);
          this.searchMoviesSubject.next(res);
        })
      );
  }

  setSelectedMovie(movieId: number): void {
    const url = `${this.apiUrl}/${movieId}`;
    console.log('Fetching movie details from backend:', url);
    this.http.get<MovieDetail>(url).subscribe((movie) => {
      console.log('Movie details fetched:', movie);
      this.selectedMovieSubject.next(movie);
    });
  }

  getMoviesByPage(page: number): Observable<{ results: Movie[]; total_pages: number }> {
    const url = `${this.apiUrl}/discover?page=${page}`;
    console.log('Fetching movies for page:', page);
    return this.http.get<{ results: Movie[]; total_pages: number }>(url);
  }
  

  getSelectedMovie(): Observable<MovieDetail | null> {
    console.log('Selected movie observable:', this.selectedMovie$);
    return this.selectedMovie$;
  }

  getMovieTrailers(movieId: number): Observable<any[]> {
    const url = `${this.apiUrl}/${movieId}/trailers`;
    console.log('Fetching trailers from backend:', url);
    return this.http.get<{ results: any[] }>(url).pipe(
      map((res) => res.results.filter((video) => video.site === 'YouTube'))
    );
  }

  //   getMovieTrailers(movieId: number): Observable<any> {
//     const url = `${this.baseUrl}/movie/${movieId}/videos?api_key=${this.apiKey}`;
//     return this.http.get<{ results: any[] }>(url).pipe(
//       map((res) => res.results.filter((video) => video.site === 'YouTube')) // Only get YouTube videos
//     );
//   }


  clearData(): void {
    console.log('Clearing movie data');
    this.moviesSubject.next([]);
    this.searchMoviesSubject.next([]);
    this.selectedMovieSubject.next(null);
  }
}
