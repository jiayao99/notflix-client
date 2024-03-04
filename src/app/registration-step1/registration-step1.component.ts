import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-registration-step1',
  templateUrl: './registration-step1.component.html',
  styleUrl: './registration-step1.component.scss'
})
export class RegistrationStep1Component {
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private registrationService: RegistrationService, private router: Router) {}

  onNext() {
    if (this.form.valid) {
      const userData: Partial<User> = {
        email: this.form.value.email ?? undefined,
        password: this.form.value.password ?? undefined
      };
      this.registrationService.setUserData(userData);
      this.router.navigate(['/step2']);
    }
  }
}
