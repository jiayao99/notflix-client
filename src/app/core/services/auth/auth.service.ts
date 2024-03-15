import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { User } from '../../../shared/interfaces/user.model';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:4231';
  private currentUserSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient, private router: Router) {
    this.checkAuthentication();
  }

  private checkAuthentication(): void {
    const token = localStorage.getItem('accessToken');
    if (token) {
      const decodedToken: any = jwtDecode(token);
      const userData: User = {
        username: decodedToken.username,
        password: '',
        email: decodedToken.email,
        role: '',
        tmdb_key: decodedToken.tmdb_key,
      };
      this.currentUserSubject.next(userData);
    } else {
      this.currentUserSubject.next(null);
    }
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  public isLoggedInSync(): boolean {
    const user = this.currentUserValue;
    return !!user;
  }

  public getCurrentUserObservable(): Observable<User | null> {
    return this.currentUserSubject.asObservable();
  }

  login(user: Partial<User>): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/signin`, user).pipe(
      map((response) => {
        localStorage.setItem('accessToken', response.accessToken);
        localStorage.setItem('role', response.role);
        const decodedToken: any = jwtDecode(response.accessToken);
        const userData: User = {
          username: decodedToken.username,
          password: '',
          email: decodedToken.email,
          role: '',
          tmdb_key: decodedToken.tmdb_key,
        };
        this.currentUserSubject.next(userData);
        return response;
      })
    );
  }

  logout() {
    localStorage.clear();
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
    
  }

  isLoggedIn(): Observable<boolean> {
    return this.currentUserSubject.asObservable().pipe(map((user) => !!user));
  }

  signup(userData: Partial<User>): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/signup`, userData);
  }

  checkEmail(email: { email: string }): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/auth/check-email`, email);
  }
  
  getToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  updateUser(updateCredentialDto: any): Observable<any> {
    const url = `${this.baseUrl}/auth/userupdate`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.getToken()}`,
    });
    return this.http.patch<any>(url, updateCredentialDto, { headers }).pipe(
      tap(response => {
        // Make sure 'response.role' exists before trying to set it
          localStorage.setItem('role', response.role);
      })
    );
  }
}
