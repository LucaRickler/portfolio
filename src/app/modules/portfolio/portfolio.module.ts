import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioElementComponent } from './components/portfolio-element/portfolio-element.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { IndexComponent } from './components/index/index.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    MarkdownModule.forChild(),
    NgbModule.forRoot(),
    SharedModule,
    PortfolioRoutingModule
  ],
  declarations: [PortfolioElementComponent, PortfolioComponent, IndexComponent]
})
export class PortfolioModule { }
