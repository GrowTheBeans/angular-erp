import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {

  constructor() { }
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  
  ngOnInit(): void {
  }
  onSubmit(){}
}
