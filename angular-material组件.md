## 1.SidebarComponent
    <mat-sidenav #sidenav mode="over"> 
    mode="side"//并排显示
    mode="push"//相当于over和side的结合
    position="end"//侧边栏在右侧

    <button (click)="sidenav.toggle()">打开侧边栏</button>
    toogle方法：类似open
## 2.Toolbar 头部和尾部

    在想居中元素两边都放了自动扩大充满的元素。
    .fill-remaining-space {
    // 使用 flexbox 填充剩余空间
    // @angular/material 中的很多控件使用了 flex 布局
    flex: 1 1 auto;
    }

    <mat-toolbar color="primary">
        <span class="fill-remaining-space"></span>
        <span>&copy; strof 版权声明</span>
        <span class="fill-remaining-space"></span>
    </mat-toolbar>
    多行内容 
     <mat-toolbar>
        <mat-toolbar-row></mat-toolbar-row>
     </mat-toolbar>
## 3.icon
        <mat-icon>menu</mat-icon>

使用SVG图标
方法一：直接在需要调用图标的组件中引入
    constructor(private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('gift', sanitizer.bypassSecurityTrustResourceUrl('assets/gift.svg'));
  }
  <mat-icon svgIcon="gift"></mat-icon>
方法二：避免在多个组件中不断调用，每次使用一个新图标都要注册一遍。图标分散在各个组件的constructor中，难以维护。
在app下创建一个utils目录，在utils里建一个svg.util.ts。
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
  ir.addSvgIcon("gift", ds.bypassSecurityTrustResourceUrl("assets/gift.svg"));
};
不在组件的constructor里导入里，在core.module里只加载一次。
  constructor( @Optional() @SkipSelf() parent: CoreModule, // 加上@SkipSelf()注解
               ir: MatIconRegistry,
               ds: DomSanitizer) {
    if (parent) {
      throw new Error('模块已经存在，不能再次加载!');
    }
    // 引入icon
    loadSvgResources(ir, ds);
  }

## 4.card
## 5.input
## 6.button
## 7.GridList
## 8.list
## 9.dialog
1.从调用者向Dialog传递数据
  传输数据：
  const dialogRef = dialog.open(YourDialog, {data:'Your data'});
  接收数据：
  在Dialog的构造中注入MD_DIALOG_DATA就可以取得数据。
  constructor(@Inject(MAT_DIALOG_DATA) private data: any) { }
2.在Dialog把数据往回传，传给调用者
    //注入MatDialogRef 
    constructor(@Inject(MAT_DIALOG_DATA) private data: any,
        public dialogRef: MatDialogRef<NewProjectComponent>, ) { }
    //在点击保存按钮时候发送数据
    onSave() {
        this.dialogRef.close('I received your message');
    }
    
//调用者open的时候拿到一个引用，注册afterClosed事件返回一个Observable
  openNewProjectDialog() {
    // this.dialog.open(NewProjectComponent,{data:'this is a dialog'});
    const dialogRef = this.dialog.open(NewProjectComponent, {
      data: "this is a dialog"
    });
    dialogRef.afterClosed().subscribe((result)=>{
      console.log(result);
    });
  }
3.Dialog样式支持主题
//注入OverlayContainer  
constructor(@Inject(MAT_DIALOG_DATA) private data: any,
    public dialogRef: MatDialogRef<NewProjectComponent>,
    private oc: OverlayContainer) { }

//通过传入dark来切换class
  ngOnInit() {
    console.log(JSON.stringify(this.data));
    this.oc.themeClass = this.data.dark ? 'myapp-dark-theme' : 'null';
  }

## 10.autoComplete 自动完成
## 11.menu
## 12.复选框，单选组件和下拉框
## 13.DatePicker
## 14.主题