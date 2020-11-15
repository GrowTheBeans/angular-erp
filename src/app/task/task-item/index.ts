import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskVM } from 'src/app/vm';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Output() taskComplete = new EventEmitter();
  @Output() taskClick = new EventEmitter();
  @Input() item: TaskVM;
  avatar: string;
  widerPriority = 'in';

  constructor() {
  }

  ngOnInit() {
    this.avatar = (this.item.owner) ? this.item.owner.avatar : 'unassigned';
  }
  onCheckboxClick($event){
    
  }
  checkboxChanged(){

  }
  itemClicked($event){
    
  }
}
