import { Component } from '@angular/core';
import { PortfolioService } from '../../portfolio.service';
import { PortfolioElement } from '../../portfolio.element';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from '../../category';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'angular-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  imports: [RouterLink, AsyncPipe]
})
export class IndexComponent {

  elements: Observable<PortfolioElement[]>;
  categories: Observable<Category[]>;

  constructor(private porfolioService: PortfolioService) { 
    this.elements = this.porfolioService.getElements();
    this.categories = this.porfolioService.getCategories();
  }
}
