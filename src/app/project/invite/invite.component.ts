import { Component, OnInit, Output, EventEmitter, Input, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {

  @Input() item;
  @Output() launchInviteDailog = new EventEmitter<any>();

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<InviteComponent>,
  ) { }
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  
  ngOnInit(): void {
    console.log(this.data);
    
  }
  onSubmit(){
    this.dialogRef.close({name:'24524'})
    this.launchInviteDailog.emit({name:'2452'});
  }
}
