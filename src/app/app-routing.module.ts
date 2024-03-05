import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationStep1Component } from './registration-step1/registration-step1.component';
import { RegistrationStep2Component } from './registration-step2/registration-step2.component';
import { RegistrationStep3Component } from './registration-step3/registration-step3.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { MovieListComponent } from './movie-list/movie-list.component';


const routes: Routes = [{ path: 'registration/step1', component: RegistrationStep1Component },
{ path: 'registration/step2', component: RegistrationStep2Component },
{ path: 'registration/step3', component: RegistrationStep3Component },
{path: 'home', component: HomePageComponent},
{path: 'signin', component: LoginComponent},
{path: 'movies', component: MovieListComponent},
{path: '', redirectTo: 'movies', pathMatch: 'full'},
{path: '**', component: HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
