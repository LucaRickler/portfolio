import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioElementComponent } from './portfolio-element/portfolio-element.component';

const routes: Routes = [
  { path: 'portfolio', component: PortfolioElementComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
