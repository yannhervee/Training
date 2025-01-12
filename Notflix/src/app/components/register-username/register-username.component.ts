import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms';

import { RouterLink, Router } from '@angular/router';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-username',
 
  imports: [CommonModule, ReactiveFormsModule, RouterLink,],
  templateUrl: './register-username.component.html',
  styleUrl: './register-username.component.css'
})
export class RegisterUsernameComponent {

  registerUserForm!: FormGroup

  constructor(private fb: FormBuilder, private router: Router){
    this.registerUserForm = this.fb.group({
      username: ['', [Validators.required]],
      movieApiKey: ['', [Validators.required]]
    })
  }

  onSubmit():void{
    console.log("success ", this.registerUserForm.controls);
    if(this.registerUserForm.valid){
      this.router.navigate(['/register-plan'])
    }else{
      console.log("what is going on")
    }
  }

}
