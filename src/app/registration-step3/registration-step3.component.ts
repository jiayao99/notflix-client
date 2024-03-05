import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration-step3',
  templateUrl: './registration-step3.component.html',
  styleUrl: './registration-step3.component.scss'
})
export class RegistrationStep3Component{

  plans = [
    { role: 'basic', monthlyPrice: '$9.99', videoQuality: 'Good', resolution: '480p', watchOnDevices: 'Yes' },
    { role: 'standard', monthlyPrice: '$15.49', videoQuality: 'Better', resolution: '1080p', watchOnDevices: 'Yes' },
    { role: 'premium', monthlyPrice: '$19.99', videoQuality: 'Best', resolution: '4K + HDR', watchOnDevices: 'Yes' },
  ];
  

  constructor(private fb: FormBuilder, private registrationService: RegistrationService, private router: Router) {}


  form = this.fb.group({
    role: ['', Validators.required],
  });


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
