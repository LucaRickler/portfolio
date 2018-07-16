import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioElementComponent } from './portfolio-element/portfolio-element.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    PortfolioRoutingModule
  ],
  declarations: [PortfolioElementComponent]
})
export class PortfolioModule { }
