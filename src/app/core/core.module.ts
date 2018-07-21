import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreComponent } from './core.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LandingComponent } from './landing/landing.component';
import { AppRoutingModule } from './core-routing.module';
import { ContactComponent } from './contact/contact.component';

import { PortfolioModule } from '../modules/portfolio/portfolio.module';

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
    PortfolioModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [CoreComponent]
})
export class AppModule { }
