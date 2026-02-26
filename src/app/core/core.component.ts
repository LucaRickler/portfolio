import { Component } from '@angular/core';
import { fadeAnimation } from '../shared/animations/fade.animation';
import { translateAnimation } from '../shared/animations/translate.animation';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'angular-root',
  animations: [translateAnimation, fadeAnimation],
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
  imports: [FooterComponent, NavbarComponent, RouterOutlet]
})
export class CoreComponent {
  title = 'angular';
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (<any>window).ga('set', 'page', event.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');
      }
    });
  }
}
