import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
  @Input() showSignInButton: boolean = true;

  constructor(private router: Router) {};

  onGoHome() {
    this.router.navigate(['home']);
  }

  onSignIn() {
    this.router.navigate(['signin']);
  }
}
