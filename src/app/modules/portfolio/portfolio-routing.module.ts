import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioElementComponent } from './components/portfolio-element/portfolio-element.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent, children: [
    { path: '', component: IndexComponent },
    { path: ':id', component: PortfolioElementComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
