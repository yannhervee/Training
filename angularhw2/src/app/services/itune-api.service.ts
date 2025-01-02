import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ItunesResponse } from '../interfaces/Music';

@Injectable({
  providedIn: 'root'
})
export class ItuneApiService {

  base_url='https://itunes.apple.com/search';

  constructor(private http: HttpClient) { }

  private musicsSubject = new BehaviorSubject<ItunesResponse | null >(null);

  fetchMusic(searchInput: string): Observable<any> {
    const url = `${this.base_url}?term=${encodeURIComponent(searchInput)}&media=music&entity=album&attribute=artistTerm&limit=200`;
    return this.http.get<ItunesResponse>(url); // Returns an Observable
  }

  updateMusics(musics: ItunesResponse): void {
    this.musicsSubject.next(musics); // Notify all subscribers with new data
    console.log("in service", this.musicsSubject)
  }

  // Get the Observable for albums
  getMusics(): Observable<ItunesResponse | null> {
    return this.musicsSubject.asObservable();
  }

}
