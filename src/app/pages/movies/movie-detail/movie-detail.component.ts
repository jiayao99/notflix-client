import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, Videos, VideoResult } from '../../../shared/interfaces/movie.model';
import { MovieService } from '../../../core/services/movie/movie.service';
import {MatChipsModule} from '@angular/material/chips';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent{
  movie: Movie | undefined;
  video: VideoResult | undefined;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    if (movieId) {
      forkJoin({
        movieDetails: this.movieService.getMovieDetails(movieId),
        movieVideo: this.movieService.getMovieVideo(movieId)
      }).subscribe(({ movieDetails, movieVideo }) => {
        this.movie = movieDetails;
        this.video = movieVideo.results.length > 0 ? movieVideo.results[0] : undefined;
      });
    }
  }
}
