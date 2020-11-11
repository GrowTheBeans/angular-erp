import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SiderbarComponent } from './siderbar/siderbar.component';
import { MatIconRegistry} from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { loadSvgResources } from '../utils/svg.util';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SiderbarComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SiderbarComponent],
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parent: CoreModule, //加上@SkipSelf()注解
      ir: MatIconRegistry,
      ds: DomSanitizer) {
    if (parent) {
      throw new Error('模块已经存在，不能再次加载!');
    }
    // 引入icon
    loadSvgResources(ir, ds);
  }
}
