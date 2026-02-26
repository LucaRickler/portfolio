import { Component } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { Nav } from '../nav';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'angular-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [RouterLink, RouterLinkActive, NgbModule]
})
export class NavbarComponent {
  public isCollapsed = true;
  navs: Nav[];
  constructor(private navbarService: NavbarService) {
    this.navs = this.navbarService.getNavs()
  }
}
