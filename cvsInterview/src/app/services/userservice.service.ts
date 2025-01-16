import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { User } from './interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private usersSubject = new BehaviorSubject<User[]>([]);
  user$ = this.usersSubject.asObservable();

  constructor(private http : HttpClient) { }

  getUsers(): Observable<User[]>{
     return this.http.get<{ results: User[]; }>('https://randomuser.me/api/?results=5').pipe(

      map((res) => res.results),
      tap((res) => {
        console.log("response: ", res);
        this.usersSubject.next(res);
      })

    );
  }


}
