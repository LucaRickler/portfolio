import { TestBed, async } from '@angular/core/testing';
import { CoreComponent } from './core.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoreComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(CoreComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'angular'`, async(() => {
    const fixture = TestBed.createComponent(CoreComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(CoreComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to luca-home-angular!');
  }));
});
