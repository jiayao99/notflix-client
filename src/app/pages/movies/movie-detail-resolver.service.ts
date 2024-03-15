import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieService } from '../../core/services/movie/movie.service';
import { Movie } from '../../shared/interfaces/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailResolverService implements Resolve<Movie> {
  constructor(private movieService: MovieService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Movie> | Promise<Movie> | Movie {
    const movieId = route.paramMap.get('movie_id');
    return this.movieService.getMovieDetails(movieId!);
  }
}
