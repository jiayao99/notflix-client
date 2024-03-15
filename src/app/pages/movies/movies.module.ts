import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { SharedModule } from '../../shared/shared.module';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { TopBarComponent } from '../../shared/components/top-bar/top-bar.component';
import { MatChipsModule } from '@angular/material/chips';
import {YouTubePlayerModule} from '@angular/youtube-player';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    MoviesComponent,
    MovieCardComponent,
    MovieDetailComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule,
    HttpClientModule,
    MatChipsModule,
    YouTubePlayerModule,
    MatProgressSpinnerModule,
    InfiniteScrollModule,
  ]
})
export class MoviesModule { }
