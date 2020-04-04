import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HugeLogoComponent } from './huge-logo/huge-logo.component';
import { SmallLogoComponent } from './small-logo/small-logo.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [HugeLogoComponent, SmallLogoComponent, MenuComponent],
  imports: [
    CommonModule
  ], exports: [HugeLogoComponent, SmallLogoComponent, MenuComponent]
})
export class HeaderModule { }
