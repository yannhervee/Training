import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const noAuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated.getValue()) {
    // User is authenticated; redirect to movie-list
    router.navigate(['/movie-list']);
    return false;
  }
  // Allow access if not authenticated
  return true;
};
