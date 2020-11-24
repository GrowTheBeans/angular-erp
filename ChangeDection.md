## ChangeDection
检测程序内部状态，然后反映到UI上。
引起状态变化：Events，XHR，Timers
ApplicationRef监听NgZone的onTurnDone，然后执行检测。

@Component({
  selector: "app-project-list",
  templateUrl: "./project-list.component.html",
  styleUrls: ["./project-list.component.scss"],
  animations:[
    slideToRight,listAnimation
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

#### 在事件发生的时候主动告诉Angular来检查这条路线。
 dialogRef.afterClosed().subscribe(result=>{
     //弹窗关闭的时候删除掉刚刚选择的数据，就不需要后端查询了
      this.projects=this.projects.filter(p=>p.id!=project.id);
      this.cd.markForCheck();
    });
在新增/删除移除或新增数值时 this.cd.markForCheck();

### 笨组件
把笨组件标识为OnPush
直接加changeDetection:ChangeDetectionStrategy.OnPush