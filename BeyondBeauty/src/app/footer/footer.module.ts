import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { CopyrightComponent } from './copyright/copyright.component';



@NgModule({
  declarations: [IndexComponent, CopyrightComponent],
  imports: [
    CommonModule
  ],  exports: [CopyrightComponent, IndexComponent]
})
export class FooterModule { }
