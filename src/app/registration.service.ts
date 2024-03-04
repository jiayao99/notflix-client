import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private userData: User = new User('', '', '', '', '');

  constructor() {}

  setUserData(data: Partial<User>) {
    this.userData = { ...this.userData, ...data };
  }

  getUserData(): User {
    return this.userData;
  }
}
