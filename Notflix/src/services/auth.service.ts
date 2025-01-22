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
  private readonly USERNAME_KEY = 'username';

  constructor(private http: HttpClient, private router: Router) {
    const token = localStorage.getItem(this.TOKEN_KEY);
    const username = localStorage.getItem(this.USERNAME_KEY);

    
    if (token) {
      this.isAuthenticated.next(true);
    }
    
    if (username) {
      this.userNameSubject.next(username);
    }
  }

  login(email: string, password: string) {
    return this.http
      .post<{ token: string; user: { username: string; role: string } }>(
        'http://localhost:5566/auth/login',
        { email, password }
      )
      .subscribe({
        next: (response) => {
          const token = response.token;
          console.log('Login response:', response);

          // Store token and username in localStorage
          localStorage.setItem(this.TOKEN_KEY, token);
          localStorage.setItem(this.USERNAME_KEY, response.user.username);

          // Update user state
          this.isAuthenticated.next(true);
          this.userNameSubject.next(response.user.username);

          localStorage.setItem('user_role', response.user.role);

          // Navigate to movies
          this.router.navigate(['/movie-list']);
        },
        error: () => {
          alert('Invalid credentials');
        },
      });
  }

  logout(): void {
    // Clear localStorage and reset state
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USERNAME_KEY);
    localStorage.removeItem('user_role');

    this.isAuthenticated.next(false);
    this.userNameSubject.next(null);

    this.router.navigate(['/login']);
  }

  register(username: string, email: string, password: string, role: string) {
    return this.http
      .post<{ token: string; user: { username: string; role: string } }>(
        'http://localhost:5566/users/signup',
        { username, email, password, role }
      )
      .subscribe({
        next: (response) => {
          console.log('Response received:', response);
          const token = response.token;

          // Store token and username in localStorage
          localStorage.setItem(this.TOKEN_KEY, token);
          localStorage.setItem(this.USERNAME_KEY, response.user.username);

          // Update user state
          this.isAuthenticated.next(true);
          this.userNameSubject.next(response.user.username);

          localStorage.setItem('user_role', response.user.role);

          // Redirect to movie list
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
