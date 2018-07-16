import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PortfolioElement } from './portfolio.element';
import { ELEMENTS } from './PORTFOLIO';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  currentElement = 0;

  constructor() { }

  previousElement(): void {
    this.currentElement -= 1;
    if (this.currentElement < 0) {
      this.currentElement = 0;
    }
  }

  nextElement(): void {
    this.currentElement += 1;
    if (this.currentElement >= ELEMENTS.length) {
      this.currentElement = ELEMENTS.length - 1;
    }
  }

  getElement(): PortfolioElement {
    return ELEMENTS[this.currentElement];
  }
}
