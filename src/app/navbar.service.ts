import { Injectable } from '@angular/core';
import { Nav } from './nav';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  navs: Nav[] = [
    new Nav('Home', '/'),
    new Nav('Portfolio', '/portfolio'),
    new Nav('Résumé', '/resume'),
    new Nav('Contac Me', '/contac')
  ];

  constructor() { }

  public getNavs(): Nav[] {
    return this.navs;
  }

}
