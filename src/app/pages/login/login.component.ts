import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../shared/interfaces/user.model';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth/auth.service';
import { UserService } from '../../core/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit{
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(
    private userService: UserService,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.auth.isLoggedIn().subscribe((loggedIn) => {
      this.router.navigate(['/movies']);
    });
  }

  onSubmit() {
    localStorage.clear();
    console.log(this.form.value);
    if (this.form.valid) {
      const userData: Partial<User> = {
        email: this.form.value.email ?? undefined,
        password: this.form.value.password ?? undefined,
      };
      this.userService.setUserData(userData);
      this.auth.login(userData).subscribe({
        next: (response) => {
          console.log('Login successful', response);
          console.log(this.auth.getToken())
          this.router.navigate(['/movies']);
        },
        error: (error) => {
          console.log(this.userService.getUserData());
          console.error('Login failed', error);
        },
      });
    }
  }
}
