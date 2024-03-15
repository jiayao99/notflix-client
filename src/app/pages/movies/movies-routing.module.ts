import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieDetailResolverService } from './movie-detail-resolver.service';
import { AuthGuard } from '../../shared/guards/auth/auth.guard';
import { RoleGuard } from '../../shared/guards/role/role.guard';

const routes: Routes = [
  { path: '', component: MoviesComponent, canActivate: [AuthGuard] },
  {
    path: ':id',
    component: MovieDetailComponent,
    canActivate: [AuthGuard, RoleGuard],
    //resolve: {movie: MovieDetailResolverService}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
