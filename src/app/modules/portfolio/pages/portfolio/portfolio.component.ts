import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../portfolio.service';
import { PortfolioElement } from '../../portfolio.element';

class Category {
  constructor(
    public name: string,
    public elements: PortfolioElement[]
  ) { }
}

@Component({
  selector: 'angular-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  elements: PortfolioElement[];
  orderedElements: Category[];

  constructor(private porfolioService: PortfolioService) { }

  ngOnInit() {
    this.getElements();
  }

  getElements(): void {
    this.porfolioService.getElements().subscribe(elements => this.elements = elements);
    this.orderedElements = [];
    // tslint:disable-next-line:forin
    for (const e in this.elements) {
      const category = this.elements[e].category;
      const index = this.getCategoryIndex(category);
      if (index > -1) {
        this.orderedElements[index].elements.push(this.elements[e]);
      } else {
        const j = this.orderedElements.push(new Category(category, []));
        this.orderedElements[j - 1].elements.push(this.elements[e]);
      }
    }
  }

  private getCategoryIndex(category: string): number {
    for (const c in this.orderedElements) {
      if (this.orderedElements[c].name === category) {
        return Number(c);
      }
    }
    return -1;
  }

}
