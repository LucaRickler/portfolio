import { Component, OnInit } from '@angular/core';
import { PortfolioElement } from '../../portfolio.element';
import { PortfolioService } from '../../portfolio.service';

@Component({
  selector: 'angular-portfolio-element',
  templateUrl: './portfolio-element.component.html',
  styleUrls: ['./portfolio-element.component.css']
})
export class PortfolioElementComponent implements OnInit {
  id: string;
  element: PortfolioElement;
  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.getElement();
  }

  getElement(): void {
    console.log(this.id);
    this.element = this.portfolioService.getElement(this.id);
  }

  previous(): void {
    this.portfolioService.previousElement(this.id);
    this.getElement();
  }

  next(): void {
    this.portfolioService.nextElement(this.id);
    this.getElement();
  }

}
