import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie, Videos } from '../../../shared/interfaces/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = 'f6cfcdb84dc51d198b7d0f0305d868a2';

  constructor(private http: HttpClient) { }

  getMovies(page: number = 1): Observable<any> {
    return this.http.get(`${this.apiUrl}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&page=${page}`);
  }

  getMovieDetails(movieId: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}/movie/${movieId}?api_key=${this.apiKey}`);
  }

  getMovieVideo(movieId: string): Observable<Videos> {
    return this.http.get<Videos>(`${this.apiUrl}/movie/${movieId}/videos?api_key=${this.apiKey}`);
  }
  
}
