import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService); // Dynamically inject AuthService
  const token = authService.getToken(); // Retrieve the token

  if (token) {
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`, // Add Authorization header
      },
    });
    return next(clonedRequest); // Pass the modified request
  }

  // Pass the unmodified request
  return next(req);
};
