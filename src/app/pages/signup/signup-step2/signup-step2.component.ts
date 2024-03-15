import { UserService } from './../../../core/services/user/user.service';
import { Component } from '@angular/core';
import { User } from '../../../shared/interfaces/user.model';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-step2',
  templateUrl: './signup-step2.component.html',
  styleUrl: './signup-step2.component.scss',
})
export class SignupStep2Component {
  form = this.fb.group({
    username: ['', Validators.required],
    tmdb_key: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {}
  onNext() {
    if (this.form.valid) {
      const userData: Partial<User> = {
        username: this.form.value.username ?? undefined,
        tmdb_key: this.form.value.tmdb_key ?? undefined
      };
      this.userService.setUserData(userData);
      console.log(this.userService.getUserData())
      this.router.navigate(['signup/step3']);
    }
  }
}
