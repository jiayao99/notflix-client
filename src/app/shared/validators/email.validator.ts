import { Injectable } from '@angular/core';
import { AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, debounceTime, map, switchMap, take } from 'rxjs/operators';
import { AuthService } from '../../core/services/auth/auth.service';

@Injectable({ providedIn: 'root' })
export class EmailValidator {
  static createValidator(authService: AuthService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      if (!control.value) {
        return of(null);
      }
      return control.valueChanges.pipe(
        debounceTime(500),
        take(1),
        switchMap(email => 
          authService.checkEmail(email).pipe(
            map(isTaken => (isTaken ? { emailAlreadyRegistered: true } : null)),
            catchError(() => of(null))
          )
        )
      );
    };
  }
}
