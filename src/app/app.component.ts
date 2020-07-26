import { Component } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  theme='ligth';
  constructor(  private themeService: ThemeService){
    
  }
  changeTheme(){
    if(this.theme=='ligth'){
      this.themeService.setLightTheme();
    } else{
      this.themeService.setDarkTheme();
    }
  }
}
