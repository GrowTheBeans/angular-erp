import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggle = new EventEmitter();
  @Output() toggleDarkTheme = new EventEmitter();

  constructor(){}
  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  openSider(){
    this.toggle.emit();
  }

  onChange(checked:boolean){
    this.toggleDarkTheme.emit(checked);
  }
}
