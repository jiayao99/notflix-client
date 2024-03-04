import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-registration-step3',
  templateUrl: './registration-step3.component.html',
  styleUrl: './registration-step3.component.scss'
})
export class RegistrationStep3Component {
  form = this.fb.group({
    role: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private registrationService: RegistrationService, private router: Router) {}

  onNext() {
    if (this.form.valid) {
      const userData: Partial<User> = {
        role: this.form.value.role ?? undefined,
      };
      this.registrationService.setUserData(userData);
      this.router.navigate(['/']);
    }
  }
}
