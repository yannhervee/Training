import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;
  
  
  constructor(private fb: FormBuilder, private authService: AuthService){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], 
      password:['', [Validators.required, ]]
    })
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value; 
      console.log('Login form values:', { email, password });
      this.authService.login(email, password); 
    } else {
      console.log('Invalid form submission');
      alert('Please fill out all required fields.');
    }
    
  }




}
