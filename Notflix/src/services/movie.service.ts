import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable, tap, map } from 'rxjs';
import { Movie } from './interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = 'd3a24da516a446b3ef83e91a800cddbc'; 
  private baseUrl = 'https://api.themoviedb.org/3';
  private moviesSubject = new BehaviorSubject<Movie[]>([]);
  movies$ = this.moviesSubject.asObservable();
  constructor(private http: HttpClient) {}
  

  getMovies(): Observable<Movie[]> {
    const url = `${this.baseUrl}/discover/movie?api_key=${this.apiKey}`;
    console.log('Fetching data from movie api:', url); 
    return this.http.get<{ results: Movie[] }>(url).pipe(
      map((res) => res.results),
      tap((res) => {
        console.log('Response:', res);
        this.moviesSubject.next(res);
      })
    );
  }


}
