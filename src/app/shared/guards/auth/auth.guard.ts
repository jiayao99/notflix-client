import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {}
  canActivate(): boolean {
    if (this.auth.currentUserValue) {
      return true;
    }
    if(localStorage.getItem('accessToken'))
    this.router.navigate(['/login'])
    console.log('rejected: not logged in')
    return false;
  }
}
