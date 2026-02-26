import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { PortfolioElement } from './portfolio.element';
import { ELEMENTS } from './PORTFOLIO';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  currentElement = ELEMENTS[0].id;
  categories: Category[] = []

  private selectedElement = new BehaviorSubject<PortfolioElement>(ELEMENTS[0]);
  private previousElement = new BehaviorSubject<PortfolioElement | undefined>(undefined);
  private nextElement = new BehaviorSubject<PortfolioElement | undefined>(undefined);

  constructor() {
    for (const e in ELEMENTS) {
      const category = ELEMENTS[e].category;
      const index = this.getCategoryIndex(category);
      if (index > -1) {
        this.categories[index].elements.push(ELEMENTS[e]);
      } else {
        const j = this.categories.push(new Category(category, []));
        this.categories[j - 1].elements.push(ELEMENTS[e]);
      }
    }
  }

  getPrevious(): Observable<PortfolioElement | undefined> {
    return this.previousElement.asObservable();
  }

  getNext(): Observable<PortfolioElement | undefined> {
    return this.nextElement.asObservable();
  }

  selectElement(id: string) {
    for (const e of ELEMENTS) {
      if (e.id === id) {
        this.selectedElement.next(e)

        for (const e in ELEMENTS) {
          if (ELEMENTS[e].id === id) {
            let i = Number(e) - 1;
            if (i < 0) {
              i = 0;
            }
            this.previousElement.next(ELEMENTS[i]);
          }
          if (ELEMENTS[e].id === id) {
            let i = Number(e) + 1;
            if (i >= ELEMENTS.length) {
              i = ELEMENTS.length - 1;
            }
            this.nextElement.next(ELEMENTS[i]);
          }
        }
      }
    }
  }

  getElement(): Observable<PortfolioElement> {
    return this.selectedElement.asObservable();
  }

  getElements(): Observable<PortfolioElement[]> {
    return of(ELEMENTS);
  }

  getCategories(): Observable<Category[]> {
    return of(this.categories);
  }

  private getCategoryIndex(category: string): number {
    for (const c in this.categories) {
      if (this.categories[c].name === category) {
        return Number(c);
      }
    }
    return -1;
  }
}
