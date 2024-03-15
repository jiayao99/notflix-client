import { Component, OnInit } from '@angular/core';
import { Movie } from '../../shared/interfaces/movie.model';
import { MovieService } from '../../core/services/movie/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent implements OnInit{
  movies: Movie[] = [];
  isLoading = true;
  currentPage = 1;

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadMovies();
  }

  trackByMovieId(index: number, movie: Movie): number {
    return movie.id;
  }

  loadMovies() {
    this.isLoading = true;
    this.movieService.getMovies(this.currentPage).subscribe(data => {
      this.movies = this.movies.concat(data.results);
      this.isLoading = false;
    });
  }

  onScroll() {
    console.log('Page:', this.currentPage);
    if (!this.isLoading) {
      this.currentPage++;
      this.loadMovies();
    }
  }
}
