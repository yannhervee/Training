import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  public isAuthenticated = new BehaviorSubject<boolean>(false);
  private userNameSubject = new BehaviorSubject<string | null>(null);

  isAuthenticated$ = this.isAuthenticated.asObservable();
  userName$ = this.userNameSubject.asObservable();
  private readonly TOKEN_KEY = 'authToken';

  constructor(private http: HttpClient, private router: Router) {
    const token = localStorage.getItem(this.TOKEN_KEY);
    if (token) {
      this.isAuthenticated.next(true);
    }
  }

  login(email: string, password: string) {
    return this.http
      .post<{ token: string; user: { username: string; role: string }  }>(
        'http://localhost:5566/auth/login',
        { email: email, password }
      )
      .subscribe({
        next: (response) => {
          // Store the access token in localStorage
          const token = response.token;
          console.log("login response ", response)
          localStorage.setItem(this.TOKEN_KEY, token);

          // Update user state
          this.isAuthenticated.next(true);
          this.userNameSubject.next(response.user.username);
          localStorage.setItem('user_role', response.user.role);

          // Navigate to movies
          this.router.navigate(['/movies']);
        },
        error: () => {
          alert('Invalid credentials');
        },
      });
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.isAuthenticated.next(false);
    this.userNameSubject.next(null);
    this.router.navigate(['/login']);
    
  }

  register(username: string, email: string, password: string, role: string) {
    return this.http
      .post<{ token: string; user: { username: string; role: string }}>(
        'http://localhost:5566/users/signup',
        { username, email, password, role }
      )
      .subscribe({
        next: (response) => {
          console.log('Response received:', response);
          const token = response.token;
          localStorage.setItem(this.TOKEN_KEY, token);

          // Update user state
          this.isAuthenticated.next(true);
          
          this.userNameSubject.next(response.user.username);
          localStorage.setItem('user_role', response.user.role);

          //redirecting
          this.router.navigate(['/movie-list']);
        },
        error: (error) => {
          if (error.status === 409) {
            alert('Email already exists. Redirecting to login.');
            this.router.navigate(['/login']);
          } else {
            alert('Registration failed. Please try again.');
          }
        },
      });
    }

    getToken(): string | null {
      return localStorage.getItem(this.TOKEN_KEY);
    }
}
