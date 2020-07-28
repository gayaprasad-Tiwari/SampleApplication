import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme.service';
import { light, dark, Theme } from 'src/theme';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should get available themes',()=>{
    spyOn(service, 'getAvailableThemes').and.callThrough()
    expect(service.getAvailableThemes()).toEqual([light,dark])
  })
  it('should get active themes',()=>{
    spyOn(service, 'getActiveTheme').and.callThrough();
    expect(service.getActiveTheme()).toEqual(light)
  })
  it('should return dark theme',()=>{
    spyOn(service, 'isDarkTheme').and.callThrough();
    expect(service.isDarkTheme()).toBeFalsy()
  })
});
