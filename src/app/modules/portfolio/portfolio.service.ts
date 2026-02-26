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

  previousElement(id: string): Observable<PortfolioElement | undefined> {
    for (const e in ELEMENTS) {
      if (ELEMENTS[e].id === id) {
        let i = Number(e) - 1;
        if (i < 0) {
          i = 0;
        }
        return of(ELEMENTS[i]);
      }
    }

    return of();
  }

  nextElement(id: string): Observable<PortfolioElement | undefined> {
    for (const e in ELEMENTS) {
      if (ELEMENTS[e].id === id) {
        let i = Number(e) + 1;
        if (i >= ELEMENTS.length) {
          i = ELEMENTS.length - 1;
        }
        return of(ELEMENTS[i]);
      }
    }

    return of();
  }

  getElement(id: string): Observable<PortfolioElement | undefined> {
    for (const e in ELEMENTS) {
      if (ELEMENTS[e].id === id) {
        return of(ELEMENTS[e]);
      }
    }

    return of();
  }

  getElements(): Observable<PortfolioElement[]> {
    return of(ELEMENTS);
  }
}
