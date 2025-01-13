import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators} from '@angular/forms';
import { passwordValidator } from '../../validators/password-validator';
import { RouterLink, Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router){
    
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, passwordValidator]]

    })

  }

  ngOnInit() {
    // Get the query parameter and set the initial value of the email field
    const email = this.route.snapshot.queryParamMap.get('email');
    const sa = this.route;
    console.log("checking ", sa);
    if (email) {
      this.registerForm.patchValue({ email }); // Prefill the email field
    }
  }



  onSubmit(): void{
    
    if(this.registerForm.valid){
      console.log("registered success ", this.registerForm.controls);
      this.router.navigate(['/register-info']);
      
    }else{
      console.log("failure form is invalid")
    }
  }

}
