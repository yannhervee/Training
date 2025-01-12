import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [CommonModule, NavComponent, FormsModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router){

  }

  email: string = "";

  getStarted(): void{
    if(this.email.trim()){
      this.router.navigate(['/register'], {queryParams: {email: this.email}})
    }
    else{
      console.log("empty input");
    }
  }

}
