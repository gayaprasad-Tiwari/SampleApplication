import { Component } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  theme='ligth';
  title='Sample Application';
  constructor(  public themeService: ThemeService){
    
  }
  changeTheme(){
    if(this.theme=='ligth'){
      this.themeService.setLightTheme();
    } else{
      this.themeService.setDarkTheme();
    }
  }
}
