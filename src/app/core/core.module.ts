import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { CoreComponent } from './core.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LandingComponent } from './landing/landing.component';
import { AppRoutingModule } from './core-routing.module';
import { ContactComponent } from './contact/contact.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { PortfolioModule } from '../modules/portfolio/portfolio.module';
import { RouteReuseStrategy } from '@angular/router';
import { CustomReuseStrategy } from './custom-reuse.strategy';
// import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CoreComponent,
    NavbarComponent,
    FooterComponent,
    WelcomeComponent,
    LandingComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    PortfolioModule,
    HttpClientModule,
    NgbModule.forRoot(),
    MarkdownModule.forRoot({ loader: HttpClient }),
    // SharedModule,
    AppRoutingModule
  ],
  providers: [{provide: RouteReuseStrategy, useClass: CustomReuseStrategy}],
  bootstrap: [CoreComponent]
})
export class AppModule { }
