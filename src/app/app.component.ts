import { Component } from '@angular/core';
import { fadeAnimation } from './animations/fade.animation';

@Component({
  selector: 'angular-root',
  animations: [ fadeAnimation ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
}
