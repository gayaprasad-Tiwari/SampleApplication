import { TestBed, async, tick, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { ThemeService } from './theme.service';

describe('AppComponent', () => {
  let  app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let service: ThemeService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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

  it(`should have as title 'Task Manager'`, () => {
    expect(app.title).toEqual('Task Manager');
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('div h1').textContent).toContain('Task Manager');
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
    })
  })
});
