import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent implements OnInit{
  movies: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMovies().subscribe(data => {
      this.movies = data.results;
    });
  }
}
