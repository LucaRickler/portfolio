import { NgModule } from '@angular/core';
import { LandingComponent } from '../landing/landing.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'welcome', component: WelcomeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
