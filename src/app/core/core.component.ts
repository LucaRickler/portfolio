import { Component } from '@angular/core';
import { fadeAnimation } from '../shared/animations/fade.animation';
import { translateAnimation } from '../shared/animations/translate.animation';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'angular-root',
  animations: [ translateAnimation, fadeAnimation ],
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
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
