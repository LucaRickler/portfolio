import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioElementComponent } from './components/portfolio-element/portfolio-element.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    PortfolioRoutingModule
  ],
  declarations: [PortfolioElementComponent, PortfolioComponent]
})
export class PortfolioModule { }
