import { Routes } from '@angular/router';
import { PortfolioElementComponent } from './components/portfolio-element/portfolio-element.component';
import { IndexComponent } from './components/index/index.component';

export const portfolioRoutes: Routes = [
  { path: '', component: IndexComponent },
  { path: ':id', component: PortfolioElementComponent }
];
