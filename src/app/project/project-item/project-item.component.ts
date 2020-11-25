import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { InviteComponent } from '../invite/invite.component';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {

  @Input() item;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  onClick(data){

  }
  openUpdateDialog(data){

  }
  openInviteDialog(data){
    let members = [];
    const dialogRef = this.dialog.open(InviteComponent, {data: { members: members}});
    // 使用 take(1) 来自动销毁订阅，因为 take(1) 意味着接收到 1 个数据后就完成了
    dialogRef.afterClosed().pipe(
      take(1)
    ).subscribe(val => {
      if (val) {
      }
    });
  }
  openDeleteDialog(data){

  }
}
