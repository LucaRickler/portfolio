import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'angular-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  imports: [FontAwesomeModule],
})
export class LandingComponent implements OnInit {

  faAngleDown = faAngleDown;

  constructor() { }

  ngOnInit() {
  }

}
