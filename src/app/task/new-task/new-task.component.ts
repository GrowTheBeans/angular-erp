import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  form: FormGroup;
  dialogTitle: string;
  notConfirm = true;
  delInvisible = true;

  priorities: { label: string; value: number }[] = [
    {
      label: '普通',
      value: 3
    },
    {
      label: '重要',
      value: 2
    },
    {
      label: '紧急',
      value: 1
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }
  reallyDel(){
    
  }
  onDelClick(flag:boolean){

  }
}
