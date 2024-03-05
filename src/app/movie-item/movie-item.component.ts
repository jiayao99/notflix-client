import { Component, Input, OnInit} from '@angular/core';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.scss',
})
export class MovieItemComponent implements OnInit{
  @Input() movie!: Movie;

  constructor() { }

  ngOnInit(): void {
  }

  formatOverview(overview: string): string {
    const maxWords = 25;
    const words = overview.split(/\s+/);
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return overview;
  }
}
