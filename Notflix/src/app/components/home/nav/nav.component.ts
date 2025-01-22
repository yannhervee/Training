import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-nav',
  imports: [CommonModule, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{
  username: string | null = null; 
  isAuthenticated: boolean = false; 

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Subscribe to the username observable
    this.authService.userName$.subscribe((name) => {
      this.username = name;
    });

    
    this.authService.isAuthenticated$.subscribe((authStatus) => {
      this.isAuthenticated = authStatus;
    });
  }

  logout(): void {
    this.authService.logout();
  }

}
