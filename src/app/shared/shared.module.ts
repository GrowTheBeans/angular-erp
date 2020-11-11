import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [],
  exports:[
    CommonModule,
    MatCardModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class SharedModule {
  
 }
