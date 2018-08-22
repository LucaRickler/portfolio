import { Component, OnInit } from '@angular/core';
import { PortfolioElement } from '../../portfolio.element';
import { PortfolioService } from '../../portfolio.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'angular-portfolio-element',
  templateUrl: './portfolio-element.component.html',
  styleUrls: ['./portfolio-element.component.scss']
})
export class PortfolioElementComponent implements OnInit {

  id: string;
  previousID: string;
  nextID: string;
  element: PortfolioElement;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private portfolioService: PortfolioService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getElement();
  }

  getElement(): void {
    this.portfolioService.getElement(this.id).subscribe(element => this.element = element);
    this.portfolioService.previousElement(this.id).subscribe(element => this.previousID = element.id);
    this.portfolioService.nextElement(this.id).subscribe(element => this.nextID = element.id);
  }

  changeElement(id: string): void {
    // const nextUrl = 'portfolio/' + id;
    // const refreshUrl = nextUrl.indexOf('portfolio') > -1 ? '/portfolio' : 'portfolio/' + id;
    // this.router.navigateByUrl(refreshUrl).then(() => this.router.navigateByUrl(nextUrl));
    this.router.navigateByUrl(`portfolio/${id}`);
  }
}
