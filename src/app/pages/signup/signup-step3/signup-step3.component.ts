import { Component } from '@angular/core';
import { User } from '../../../shared/interfaces/user.model';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';
import { UserService } from '../../../core/services/user/user.service';

@Component({
  selector: 'app-signup-step3',
  templateUrl: './signup-step3.component.html',
  styleUrl: './signup-step3.component.scss',
})
export class SignupStep3Component {
  
  plans = [
    {
      role: 'USER',
      monthlyPrice: '$9.99',
      videoQuality: 'Good',
      resolution: '480p',
      watchOnDevices: 'Yes',
    },
    {
      role: 'SUPERUSER',
      monthlyPrice: '$15.49',
      videoQuality: 'Better',
      resolution: '1080p',
      watchOnDevices: 'Yes',
    },
    {
      role: 'ADMIN',
      monthlyPrice: '$19.99',
      videoQuality: 'Best',
      resolution: '4K + HDR',
      watchOnDevices: 'Yes',
    },
  ];

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private auth: AuthService
  ) {}

  form = this.fb.group({
    role: ['', Validators.required],
  });


  onNext() {
    console.log(this.auth.currentUserValue)
    if(this.auth.isLoggedInSync()){
      const userData: Partial<User> = {
        role: this.form.value.role ?? undefined,
      };

      this.auth.updateUser(this.form.value).subscribe({
        next: (response) => {
          console.log('User update successful', response);
          this.router.navigate(['/movies']);
        },
        error: (error) => {
          console.error('User update failed', error);
        },
      })
    }
    else{
      if (this.form.valid) {
        const userData: Partial<User> = {
          role: this.form.value.role ?? undefined,
        };
  
        this.userService.setUserData(userData);
        console.log(this.userService.getUserData())
  
        this.auth.signup(this.userService.getUserData()).subscribe({
          next: (response) => {
            console.log('Signup successful', response);
            this.router.navigate(['/login']);
          },
          error: (error) => {
            console.log(this.userService.getUserData())
            console.error('Signup failed', error);
          },
        });
      }
    }
  }
}
