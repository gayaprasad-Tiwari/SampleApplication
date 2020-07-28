import { TestBed, async, tick, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ThemeService } from './theme.service';

describe('AppComponent', () => {
  let  app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let service: ThemeService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers:[ThemeService]
    }).compileComponents();
    service = TestBed.inject(ThemeService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create the app', () => {

    expect(app).toBeTruthy();
  });

  it(`should have as title 'Sample-Application'`, () => {

    expect(app.title).toEqual('Sample Application');
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('div h1').textContent).toContain('Sample Application');
  });


it('change theme to be called',()=>{
app.changeTheme()
  spyOn(service, 'setLightTheme');
  spyOn(service, 'setDarkTheme');
  fixture.whenStable().then(()=>{
  expect(app.changeTheme).toHaveBeenCalled()
  expect(app.theme).toBe('light')
  expect(service.setLightTheme).toHaveBeenCalled()
  expect(service.setDarkTheme).not.toHaveBeenCalled()
  expect()
  })
})
it('change theme to be called',()=>{
  app.theme='dark';
  app.changeTheme()
    spyOn(app.themeService, 'setLightTheme');
    spyOn(app.themeService, 'setDarkTheme');
    fixture.whenStable().then(()=>{
    expect(app.changeTheme).toHaveBeenCalled()
    expect(app.theme).toBe('')
    expect(app.themeService.setLightTheme).not.toHaveBeenCalled()
    expect(app.themeService.setDarkTheme).toHaveBeenCalled()
    expect()
    })
  })
});
