import { Component, OnInit } from '@angular/core';
import {getDate} from 'date-fns';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.scss']
})
export class SiderbarComponent implements OnInit {

  today = 'day';

  constructor(
  ) { }

  ngOnInit(): void {
    if(this.today == '20'){
      
    }
    this.today = 'day' + getDate(new Date());
  }

}
