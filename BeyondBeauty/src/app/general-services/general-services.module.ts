import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GServicesComponent } from './gservices/gservices.component';



@NgModule({
  declarations: [GServicesComponent],
  imports: [
    CommonModule
  ],
  exports: [GServicesComponent]
})
export class GeneralServicesModule { }
