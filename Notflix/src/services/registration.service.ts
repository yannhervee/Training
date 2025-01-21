import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private email: string = '';
  private password: string = '';
  private userRole: string = '';
  private tmdbKey: string = '';
  private username: string = '';

  constructor() { }

  setEmailAndPassword(email: string, password: string): void {
    this.email = email;
    this.password = password;
    
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
