import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioElementComponent } from './portfolio-element.component';

describe('PortfolioElementComponent', () => {
  let component: PortfolioElementComponent;
  let fixture: ComponentFixture<PortfolioElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
