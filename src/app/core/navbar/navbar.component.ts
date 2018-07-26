import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { Nav } from '../nav';

@Component({
  selector: 'angular-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isCollapsed = true;
  navs: Nav[];
  constructor(private navbarService: NavbarService) { }

  ngOnInit() {
    this.getNavs();
  }

  getNavs(): void {
    this.navs = this.navbarService.getNavs();
  }

}
