import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const roleGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  const allowedRoles = ['SUPERUSER', 'ADMIN']; 
  const userRole = localStorage.getItem('user_role'); 
  console.log('Guard Execution - Role:', userRole);

  if (userRole && allowedRoles.includes(userRole)) {
    console.log("authorized user")
    
    return true; // Allow access
  }else{
    console.log("not authorized to movie-details user")
  // Redirect unauthorized users
  // router.navigate(['/register-plan']);
  return false;
  }
};
