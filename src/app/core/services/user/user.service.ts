import { Injectable } from '@angular/core';
import { User } from '../../../shared/interfaces/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userData: Partial<User> = {
    username: '',
    password: '',
    email: '',
    tmdb_key: '',
    role: '',
  }

  private baseUrl = 'http://localhost:4231';

  constructor(private http: HttpClient) { }

  setUserData(data: Partial<User>) {
    this.userData = { ...this.userData, ...data };
  }

  getUserData(): Partial<User> {
    return this.userData;
  }
}
