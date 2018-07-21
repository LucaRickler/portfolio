import { Component, OnInit } from '@angular/core';
import { translateAnimation } from '../../../../animations/translate.animation';
import { fadeAnimation } from '../../../../animations/fade.animation';


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
