import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Subscription } from 'rxjs';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {

  isLoggedIn = false;
  userName: string | null = null;
  private authSubscription!: Subscription;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.authSubscription = this.authService.getCurrentUserObservable().subscribe(user => {
      this.isLoggedIn = !!user;
      this.userName = user?.username ?? null;
    });

  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  onSignIn() {
    this.router.navigate(['login']);
  }

  onSignOut() {
    this.authService.logout();
  }

  onGoHome() {
    if(this.isLoggedIn){
      this.router.navigate(['movies']);
    }
    else{
      this.router.navigate(['home']);
    }
  }
}
