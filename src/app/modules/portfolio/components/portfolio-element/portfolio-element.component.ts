import { Component, OnInit } from '@angular/core';
import { PortfolioElement } from '../../portfolio.element';
import { PortfolioService } from '../../portfolio.service';

@Component({
  selector: 'angular-portfolio-element',
  templateUrl: './portfolio-element.component.html',
  styleUrls: ['./portfolio-element.component.css']
})
export class PortfolioElementComponent implements OnInit {
  element: PortfolioElement;
  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.getElement();
  }

  getElement(): void {
    this.element = this.portfolioService.getElement();
  }

  previous(): void {
    this.portfolioService.previousElement();
    this.getElement();
  }

  next(): void {
    this.portfolioService.nextElement();
    this.getElement();
  }

}
