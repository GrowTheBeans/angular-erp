import { NgModule, SkipSelf, Optional } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SiderbarComponent } from './siderbar/siderbar.component';
import { MatIconRegistry} from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { loadSvgResources } from '../utils/svg.util';
import { SharedModule } from '../shared/shared.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { AnimationComponent } from './animation/animation.component';
import { DialogComponent } from './dialog/dialog.component';
import { QuoteService } from '../service/quote.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SiderbarComponent,
    ButtonsComponent,
    AnimationComponent,
    DialogComponent,
  ],
  imports: [
    SharedModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SiderbarComponent,
    ButtonsComponent,
    AnimationComponent,
  ],
  providers:[
    {
      //注入变量
      provide:'BASE_CONFIG',useValue:{
        url:'http://localhost:8080'
      }
    },
    QuoteService
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parent: CoreModule, // 加上@SkipSelf()注解
               ir: MatIconRegistry,
               ds: DomSanitizer) {
    if (parent) {
      throw new Error('模块已经存在，不能再次加载!');
    }
    // 引入icon
    loadSvgResources(ir, ds);
  }
}
