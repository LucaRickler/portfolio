import { Component } from '@angular/core';

@Component({
  selector: 'angular-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor() { }

  public getYear(): string {
    return (new Date()).getFullYear().toString();
  }
}
