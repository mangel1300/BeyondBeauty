import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpMeComponent } from './help-me/help-me.component';



@NgModule({
  declarations: [HelpMeComponent],
  imports: [
    CommonModule
  ],
  exports: [HelpMeComponent]
})
export class HelpUsModule { }
