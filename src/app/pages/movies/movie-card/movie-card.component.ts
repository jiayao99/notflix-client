import { Component, Input} from '@angular/core';
import { Movie } from '../../../shared/interfaces/movie.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {
  @Input() movie!: Movie;
  @Input() isLoading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  formatOverview(overview: string): string {
    const maxWords = 10;
    const words = overview.split(/\s+/);
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return overview;
  }
}
