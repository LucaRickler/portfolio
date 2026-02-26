import { Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContactComponent } from './contact/contact.component';
import { portfolioRoutes } from '../modules/portfolio/portfolio-routing.module';

export const coreRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LandingComponent },
  { path: 'about', component: WelcomeComponent },
  { path: 'portfolio', children: portfolioRoutes },
  { path: 'contacts', component: ContactComponent }
];
