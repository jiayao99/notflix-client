import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-registration-step2',
  templateUrl: './registration-step2.component.html',
  styleUrl: './registration-step2.component.scss'
})
export class RegistrationStep2Component {
  form = this.fb.group({
    username: ['', Validators.required],
    tmdb_key: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private registrationService: RegistrationService, private router: Router) {}

  onNext() {
    if (this.form.valid) {
      const userData: Partial<User> = {
        username: this.form.value.username ?? undefined,
        tmdb_key: this.form.value.tmdb_key ?? undefined
      };
      this.registrationService.setUserData(userData);
      this.router.navigate(['/step3']);
    }
  }
}
