import { Component } from '@angular/core';
import { fadeAnimation } from './animations/fade.animation';
import { translateAnimation } from './animations/translate.animation';

@Component({
  selector: 'angular-root',
  animations: [ translateAnimation, fadeAnimation ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
}
