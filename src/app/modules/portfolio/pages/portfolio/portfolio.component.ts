import { Component, OnInit } from '@angular/core';
import { translateAnimation } from '../../../../shared/animations/translate.animation';
import { fadeAnimation } from '../../../../shared/animations/fade.animation';


@Component({
  selector: 'angular-portfolio',
  animations: [ translateAnimation, fadeAnimation ],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
