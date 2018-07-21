import { Component } from '@angular/core';
import { fadeAnimation } from '../animations/fade.animation';
import { translateAnimation } from '../animations/translate.animation';

@Component({
  selector: 'angular-root',
  animations: [ translateAnimation, fadeAnimation ],
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent {
  title = 'angular';
}
