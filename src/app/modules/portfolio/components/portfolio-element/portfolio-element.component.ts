import { Component, OnInit } from '@angular/core';
import { PortfolioElement } from '../../portfolio.element';
import { PortfolioService } from '../../portfolio.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'angular-portfolio-element',
  templateUrl: './portfolio-element.component.html',
  styleUrls: ['./portfolio-element.component.scss'],
  imports: [FontAwesomeModule, RouterLink]
})
export class PortfolioElementComponent implements OnInit {

  id: string | null = null;
  previousID: string | undefined;
  nextID: string | undefined;
  element: PortfolioElement | undefined;

  faAngleLeft = faAngleLeft; 
  faAngleRight = faAngleRight;

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
    if (this.id) {
      this.portfolioService.getElement(this.id).subscribe(element => this.element = element);
      this.portfolioService.previousElement(this.id).subscribe(element => this.previousID = element?.id);
      this.portfolioService.nextElement(this.id).subscribe(element => this.nextID = element?.id);
    }
  }

  changeElement(id: string): void {
    // const nextUrl = 'portfolio/' + id;
    // const refreshUrl = nextUrl.indexOf('portfolio') > -1 ? '/portfolio' : 'portfolio/' + id;
    // this.router.navigateByUrl(refreshUrl).then(() => this.router.navigateByUrl(nextUrl));
    this.router.navigateByUrl(`portfolio/${id}`);
  }
}
