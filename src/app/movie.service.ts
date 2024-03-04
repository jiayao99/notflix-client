import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = 'f6cfcdb84dc51d198b7d0f0305d868a2';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}`);
  }
}
