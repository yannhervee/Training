import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from '../../validators/password-validator';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { RegistrationService } from '../../../services/registration.service';
import { emailAsyncValidator } from '../../validators/email-async-validator';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private registrationService: RegistrationService
  ) {
    this.registerForm = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.email], // Synchronous validators
        emailAsyncValidator(this.registrationService) // Async validators
      ],
      password: ['', [Validators.required, passwordValidator]]
    });
  }

  ngOnInit(): void {
    // Get the query parameter and set the initial value of the email field
    const email = this.route.snapshot.queryParamMap.get('email');
    if (email) {
      this.registerForm.patchValue({ email }); // Prefill the email field
    }
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const { email, password } = this.registerForm.value;
      this.registrationService.setEmailAndPassword(email, password);
      this.router.navigate(['/register-info']);
    } else {
      console.log('Form is invalid');
    }
  }
}
