import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalsComponent } from './locals/locals.component';



@NgModule({
  declarations: [LocalsComponent],
  imports: [
    CommonModule
  ],
  exports: [LocalsComponent]
})
export class GlocalsModule { }
