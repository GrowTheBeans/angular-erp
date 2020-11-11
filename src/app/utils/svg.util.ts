import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
// 在每个modules下引用icon导致，每次使用一个新图标都要注册一遍。图标分散在各个组件的constructor中，难以维护。
// 不在组件的constructor里导入里，只需要在core module里只加载一次。
export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
  ir.addSvgIcon("gift", ds.bypassSecurityTrustResourceUrl("../../assets/gift.svg"));
};