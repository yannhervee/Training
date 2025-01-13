import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;

  if (!value) {
    return null; 
  }

  const hasUpperCase = /[A-Z]/.test(value); 
  const hasNumber = /\d/.test(value); 
  const hasMinimumLength = value.length >= 8; 

  const passwordValid = hasUpperCase && hasNumber && hasMinimumLength;

  return !passwordValid
    ? {
        passwordStrength: {
          hasUpperCase,
          hasNumber,
          hasMinimumLength,
        },
      }
    : null; // Return null if validation passes
}
