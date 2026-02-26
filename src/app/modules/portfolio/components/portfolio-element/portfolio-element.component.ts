import { Component } from '@angular/core';
import { PortfolioElement } from '../../portfolio.element';
import { PortfolioService } from '../../portfolio.service';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'angular-portfolio-element',
  templateUrl: './portfolio-element.component.html',
  styleUrls: ['./portfolio-element.component.scss'],
  imports: [FontAwesomeModule, RouterLink, AsyncPipe],
})
export class PortfolioElementComponent {

  id: string | null;
  previousID: Observable<string | undefined>;
  nextID: Observable<string | undefined>;
  element: Observable<PortfolioElement>;

  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    private portfolioService: PortfolioService
  ) {
    this.element = this.portfolioService.getElement();
    this.previousID = this.portfolioService.getPrevious().pipe(map(item => item?.id));
    this.nextID = this.portfolioService.getNext().pipe(map(item => item?.id));

    this.id = this.route.snapshot.paramMap.get('id');
    this.updateRoute();

    router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        this.id = val.url.split('/')[2];
        this.updateRoute();
      }
    });
  }

  private updateRoute() {
    if (this.id) {
      this.portfolioService.selectElement(this.id);
    }
  }
}
