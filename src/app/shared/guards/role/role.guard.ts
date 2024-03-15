import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {}
  
  getCurrentUserRole(): string | null {
    console.log(localStorage.getItem('role'))
    return localStorage.getItem('role');
  }
  
  canActivate(): boolean {

    
    if (this.getCurrentUserRole() == 'SUPERUSER' || this.getCurrentUserRole() == 'ADMIN') {
      return true;
    }
    this.router.navigate(['/signup/step3'])
    console.log(this.getCurrentUserRole())
    console.log('rejected: not available to USER role')
    return false;
  }
}
