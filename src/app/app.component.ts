import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'taskmgr';
  drakTheme = false;
  switchTheme(dark){
    this.drakTheme = dark;
  }
}
