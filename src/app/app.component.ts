import { Component } from '@angular/core';
import { QuoteService } from './service/quote.service';
// import { OverlayContainer } from '@angular/material/OverlayContainer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private _dark = false;

  // private oc: OverlayContainer
  constructor(private quote:QuoteService) {
    this.getData();
  }

  get dark() {
    return this._dark;
  }

  switchDarkTheme(dark: boolean) {
    this._dark = dark;
    // this.oc.themeClass = dark ? 'myapp-dark-theme' : null;
  }
  getData(){
    this.quote.getQuote().subscribe(data=>{
      console.log(data);
    });
  }
}
