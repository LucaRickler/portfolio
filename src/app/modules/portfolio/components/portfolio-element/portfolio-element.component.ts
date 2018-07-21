import { Component, OnInit } from '@angular/core';
import { PortfolioElement } from '../../portfolio.element';
import { PortfolioService } from '../../portfolio.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'angular-portfolio-element',
  templateUrl: './portfolio-element.component.html',
  styleUrls: ['./portfolio-element.component.css']
})
export class PortfolioElementComponent implements OnInit {

  id: string;
  element: PortfolioElement;

  constructor(
    private route: ActivatedRoute,
    private portfolioService: PortfolioService
  ) { }

  ngOnInit() {
    this.getElement();
  }

  getElement(): void {
    this.id = this.route.snapshot.paramMap.get('id');
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
