import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../portfolio.service';
import { PortfolioElement } from '../../portfolio.element';

@Component({
  selector: 'angular-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  elements: PortfolioElement[];

  constructor(private porfolioService: PortfolioService) { }

  ngOnInit() {
    this.getElements();
  }

  getElements() : void {
    this.elements = this.porfolioService.getElements();
  }

}
