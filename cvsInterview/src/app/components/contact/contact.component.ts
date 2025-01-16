import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm!: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder){
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    })
  }

  onSubmit(): void{
    if(this.contactForm.valid){
      this.submitted = true;
      console.log("submitted success ");
      console.log("form ", this.contactForm.controls);
    }
    else{
      this.contactForm.markAllAsTouched();
      console.log("form not valid")
    }
    
  }

}
