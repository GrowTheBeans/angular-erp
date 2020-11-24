import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewProjectComponent } from '../new-project/new-project.component';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  projects$ =[
    {
      "name":"企业写作平台",
      "desc":"这是一个企业内部项目",
      "coverImg":"assets/img/covers/0.jpg"
    },
    {
      "name":"企业写作平台001",
      "desc":"这是一个企业内部项目",
      "coverImg":"assets/img/covers/1.jpg"
    },
    {
      "name":"自动化测试项目",
      "desc":"这是一个企业内部项目",
      "coverImg":"assets/img/covers/2.jpg"
    },
  ];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openNewProjectDialog(){
    const img = `/assets/img/covers/${Math.floor(Math.random() * 40)}_tn.jpg`;
    const thumbnails$ = this.getThumbnailsObs();
    const dialogRef = this.dialog.open(NewProjectComponent, {data: { thumbnails: thumbnails$, img: img}});
    dialogRef.afterClosed().pipe(
      take(1)
    ).subscribe(val => {
      if (val) {
        // const converImg = this.buildImgSrc(val.coverImg);
        // this.store$.dispatch(new actions.AddProjectAction({...val, coverImg: converImg}));
      }
    });
  }

  private getThumbnailsObs(): Observable<string[]> {
    return Observable
      .create(0, 40)
      .map(i => `/assets/img/covers/${i}_tn.jpg`)
      .reduce((r, x) => {
        return [...r, x];
      }, []);
  }
}
