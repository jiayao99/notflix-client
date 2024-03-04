import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomePageComponent } from './home-page/home-page.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationStep1Component } from './registration-step1/registration-step1.component';
import { RegistrationStep2Component } from './registration-step2/registration-step2.component';
import { RegistrationStep3Component } from './registration-step3/registration-step3.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MovieListComponent } from './movie-list/movie-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignupComponent,
    LoginComponent,
    TopBarComponent,
    RegistrationStep1Component,
    RegistrationStep2Component,
    RegistrationStep3Component,
    MovieItemComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
