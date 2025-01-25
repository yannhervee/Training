import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, debounceTime, map, switchMap } from 'rxjs/operators';
import { RegistrationService } from '../../services/registration.service';

export function emailAsyncValidator(
  registrationService: RegistrationService
): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    console.log('Email control value:', control.value); // Debug input value

    if (!control.value) {
      console.log('Email is empty, skipping validation');
      return of(null); // Skip validation if empty
    }

    return registrationService.checkEmailExists(control.value).pipe(
      map((response) => {
        console.log('Email Check Response:', response); // Debug the full response
        const exists = response.exist; // Extract the 'exist' property
        console.log('Validation result for email:', exists); // Debug validation result
        return exists ? { emailExists: true } : null; // Return error if email exists
      }),
      catchError((error) => {
        console.error('Error in async validator:', error); // Debug errors
        return of(null); // Handle error gracefully
      })
    );
  };
}

  
