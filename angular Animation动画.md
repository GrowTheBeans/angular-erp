1.安装动画库
npm i --save @angular/animations
2.导入module根模块中
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
imports: [
...
BrowserAnimationsModule, //放在最后导入
],
3.添加动画的元数据属性
在组件的 @Component() 装饰器中，添加一个名叫 animations: 的元数据属性。

4.动画状态和样式，样式的属性必须是小驼峰 格式的 
state('open', style({
  height: '200px',
  opacity: 1,
  backgroundColor: 'yellow'
})),
transition('open => closed', [
      animate('1s')
    ]),

5.