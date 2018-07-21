import {NgModule, Optional, SkipSelf} from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule} from '../shared/shared.module';
import {MdIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {loadSvgResources} from '../utils/svg.util';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    HttpModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  exports: [HeaderComponent, FooterComponent, SidebarComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule,
              ir: MdIconRegistry, ds: DomSanitizer) {
    if (parent) {
      throw new Error('模块已经存在，不能再次加载！');
    }
    // 将工具类导入到核心模块，里面的每个模块都可以使用，不用频繁导入
    loadSvgResources(ir, ds);
  }
}
