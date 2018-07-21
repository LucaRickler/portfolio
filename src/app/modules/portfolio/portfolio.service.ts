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

  previousElement(id: string): PortfolioElement {
    for (const e in ELEMENTS) {
      if (ELEMENTS[e].id === id) {
        let i = Number(e) - 1;
        if (i < 0) {
          i = 0;
        }
        return ELEMENTS[i];
      }
    }
  }

  nextElement(id: string): PortfolioElement {
    for (const e in ELEMENTS) {
      if (ELEMENTS[e].id === id) {
        let i = Number(e) + 1;
        if (i >= ELEMENTS.length) {
          i = ELEMENTS.length - 1;
        }
        return ELEMENTS[i];
      }
    }
  }

  getElement(id: string): PortfolioElement {
    for (const e in ELEMENTS) {
      if (ELEMENTS[e].id === id) {
        return ELEMENTS[e];
      }
    }
    // return ELEMENTS[this.currentElement];
  }

  getElements(): PortfolioElement[] {
    return ELEMENTS;
  }
}
