import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';
import { SiderbarComponent } from './siderbar/siderbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonModule,
    SiderbarComponent
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
