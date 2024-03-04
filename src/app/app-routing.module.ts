import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationStep1Component } from './registration-step1/registration-step1.component';
import { RegistrationStep2Component } from './registration-step2/registration-step2.component';
import { RegistrationStep3Component } from './registration-step3/registration-step3.component';


const routes: Routes = [{ path: 'step1', component: RegistrationStep1Component },
{ path: 'step2', component: RegistrationStep2Component },
{ path: 'step3', component: RegistrationStep3Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
