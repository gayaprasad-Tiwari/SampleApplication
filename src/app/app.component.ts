import { Component } from '@angular/core';
import { ThemeService } from './theme.service';
import {constant} from './porperties'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

//method for change theme
export class AppComponent {
  theme=constant.properties.ligth;
  title=constant.properties.TaskManager;
  constructor(  public themeService: ThemeService){ }
  changeTheme(){
    if(this.theme=='ligth'){
      this.themeService.setLightTheme();
    } else{
      this.themeService.setDarkTheme();
    }
  }
}
