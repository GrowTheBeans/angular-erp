import { Component, OnInit, Inject } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {OverlayContainer} from '@angular/cdk/overlay';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  // form: FormGroup;
  dialogTitle: string;
  // thumbnails$: Observable<string[]>;

  constructor(
              @Inject(MAT_DIALOG_DATA) private data: any,
              private dialogRef: MatDialogRef<NewProjectComponent>,
              private oc:OverlayContainer,
              ) {
    // this.thumbnails$ = this.data.thumbnails;
    console.log(data);
    
  }

  ngOnInit() {
    // if (this.data.project) {
    //   this.form = this.fb.group({
    //     name: [this.data.project.name, Validators.compose([Validators.required, Validators.maxLength(20)])],
    //     desc: [this.data.project.desc, Validators.maxLength(40)],
    //     coverImg: [this.data.project.coverImg, Validators.required]
    //   });
      this.dialogTitle = '修改项目：';
    // } else {
    //   this.form = this.fb.group({
    //     name: ['', Validators.compose([Validators.required, Validators.maxLength(20)])],
    //     desc: ['', Validators.maxLength(40)],
    //     coverImg: [this.data.img, Validators.required]
    //   });
    //   this.dialogTitle = '创建项目：';
    // }

    this.oc.getContainerElement().classList.add(this.data.dark?'myapp-dark-theme':null);
  }
  // {value, valid}, event: Event
  onSubmit() {
    // event.preventDefault();
    // if (!valid) {
    //   return;
    // }
    // this.dialogRef.close({name: value.name, desc: value.desc ? value.desc : null, coverImg: value.coverImg});
    this.dialogRef.close({name:'24524'})
  }


}
