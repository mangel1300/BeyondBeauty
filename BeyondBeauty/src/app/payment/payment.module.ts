import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GInformationComponent } from './ginformation/ginformation.component';
import { CinformationComponent } from './cinformation/cinformation.component';



@NgModule({
  declarations: [GInformationComponent, CinformationComponent],
  imports: [
    CommonModule
  ],
  exports: [CinformationComponent, GInformationComponent]
})
export class PaymentModule { }
