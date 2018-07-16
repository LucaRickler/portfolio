import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: '', component: LandingComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'portfolio', loadChildren: 'src/app/portfolio/portfolio-routing.module#PortfolioRoutingModule' },
//  { path: 'resume', compomemt: },
  { path: 'contacts', component: ContactComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
