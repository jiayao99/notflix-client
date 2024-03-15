import { Component } from '@angular/core';
import { User } from '../../../shared/interfaces/user.model';
import { AbstractControl, AsyncValidatorFn, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, debounceTime, map, switchMap, take, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../../core/services/user/user.service';

@Component({
  selector: 'app-signup-step1',
  templateUrl: './signup-step1.component.html',
  styleUrls: ['./signup-step1.component.scss'],
})
export class SignupStep1Component {
  hide = true;
  form = this.fb.group({
    email: [
      '', 
      [Validators.required, Validators.email], [this.hasEmail()],
    ],
    password: ['', Validators.required]
  });
  isLoading = false;

  constructor(
    private fb: FormBuilder, 
    private userService: UserService, 
    private router: Router,
    private http: HttpClient
  ) {localStorage.clear();}

  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
  
  onNext() {
    if (this.form.valid) {
      const userData: Partial<User> = {
        email: this.form.value.email ?? undefined,
        password: this.form.value.password ?? undefined
      };
      this.userService.setUserData(userData);
      console.log(this.userService.getUserData())
      this.router.navigate(['signup/step2']);
    }
  }

  hasEmail(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const email = control.value;
      return control.valueChanges.pipe(
        debounceTime(500),
        switchMap((_) => {
          return this.http.post(
            'http://localhost:4231/auth/check-email',
            { email }
          );
        }),
        map((result: any) => {
          this.isLoading = false;
          return result ? { hasemail: true } : null;
        }),
        take(1)
      );
    };}
}
