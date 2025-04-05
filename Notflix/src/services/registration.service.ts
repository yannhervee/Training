import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private email: string = '';
  private password: string = '';
  private userRole: string = '';
  private tmdbKey: string = '';
  private username: string = '';

  constructor(private http: HttpClient) { }

  setEmailAndPassword(email: string, password: string): void {
    this.email = email;
    this.password = password;
    
  }
  

  checkEmailExists(email: string): Observable<{ exist: boolean }> {
    return this.http.post<{ exist: boolean }>('https://notflix-backend-61352131198.us-central1.run.app/users/checkemail', { email }).pipe(
      map((res) => {
        console.log('Email Check Response:', res); // Logs the full response object
        return res; // Return the actual response for further processing
      }),
      catchError((err) => {
        console.error('Error Checking Email:', err);
        return of({ exist: false }); // Return a default response if an error occurs
      })
    );
  }
  

  setUsernameAndTmdbKey(username: string, tmdbKey: string): void {
    this.username = username;
    this.tmdbKey = tmdbKey;
   
  }
  setUserRole(userRole: string): void {
    this.userRole = userRole;
  
   
  }

  getFinalData(): { email: string; password: string; role: string, username: string } {
    return {
      email: this.email || '',
      password: this.password || '',
      role: this.userRole || '',
      username: this.username || '',
    };
  }

  clearData(): void {
    this.email = '';
    this.password = '';
    this.userRole = '';
    this.username = '';
    this.tmdbKey = '';
    
  }



}
