import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SServicesComponent } from './sservices/sservices.component';



@NgModule({
  declarations: [SServicesComponent],
  imports: [
    CommonModule
  ],
  exports: [SServicesComponent]
})
export class EspecificServicesModule { }
