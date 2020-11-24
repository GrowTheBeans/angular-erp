资料参考:
https://www.cnblogs.com/starof/p/10106399.html
angular 官网

## 1.安装动画库
npm i --save @angular/animations
## 2.导入module根模块中
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
imports: [
...
BrowserAnimationsModule, //放在最后导入
],
## 3.添加动画的元数据属性
在组件的 @Component() 装饰器中，添加一个名叫 animations: 的元数据属性。

## 4.动画状态和样式，样式的属性必须是小驼峰 格式的 
state('open', style({
  height: '200px',
  opacity: 1,
  backgroundColor: 'yellow'
})),
transition('open => closed', [
      animate('1s')
    ]),


## 5.缓动函数  ease-in 开始快  ease-out开始慢
transition('open => closed', [
      animate('.8s ease-in')
    ]),
    transition('open => closed', [
      animate('.8s ease-out')
    ]),
  ### 自然缓动曲线
  查看对应的函数
  Angular Material Design : https://material.io/design/motion/speed.html#easing

  cubic-bezier： https://cubic-bezier.com/#.17,.67,.83,.67

## 6.通配符 * 
  它可用来定义那些不用在乎 HTML 元素的起始状态或结束状态的转场动画。
  有特殊需要转场动画的加可以在通配符之前。

  ### 组合使用通配符和 void 状态
  在转场中组合使用通配符和 void 状态，以触发那些进入和离开页面的动画：
  当元素离开视图时，就会触发 * => void 转场，而不管它离开前处于什么状态。
  当元素进入视图时，就会触发 void => * 转场，而不管它进入时处于什么状态。
  通配符状态 * 会匹配任何状态 —— 包括 void。

  ###  :enter 与 :leave 
  等同于 void => * 和 * => void 与ngIf,ngFor 一起使用，来定位要从视图中插入或删除的 HTML 元素

   ### 选择器值：:increment 和 :decrement。当数值增加或减小时，使用这些来启动转场

## 7.禁用动画
  ### 禁用某个html的动画 
  设置元素@.disabled = true

  ### 禁用所有动画
  disabled 绑定放在顶层的 Angular 组件
  export class AppComponent {
    @HostBinding('@.disabled')
    public animationsDisabled = false;
  }
## 8.关键帧 keyframes
transition('red=>green', animate(5000, keyframes([
        style({transform:'translateY(100%)'}),
        style({transform:'translateY(98%)'}),
        style({transform:'translateY(95%)'}),
        style({transform:'translateY(90%)'}),
        style({transform:'translateY(80%)'}),
        style({transform:'translateY(60%)'}),
        style({transform:'translateY(30%)'}),
        style({transform:'translateY(0)'}),
        style({transform:'translateY(-10%)'}),
        style({transform:'translateY(-5%)'}),
        style({transform:'translateY(-2%)'}),
        style({transform:'translateY(0)'}),
        style({transform:'translateY(10%)'}),
        style({transform:'translateY(15%)'}),
        style({transform:'translateY(-15%)'}),
        style({transform:'translateY(-40%)'}),
        style({transform:'translateY(-80%)'}),
        style({transform:'translateY(-90%)'}),
        style({transform:'translateY(-95%)'})
      ])))
## 9.可复用的动画

## 10.复杂序列
  使用 query() 和 stagger()（交错）函数执行多元素动画
  query() 用于查找一个或多个内部 HTML 元素。

  stagger() 用于为多元素动画应用级联延迟。

  group() 用于并行执行多个动画步骤。

  sequence() 用于逐个顺序执行多个动画步骤。
