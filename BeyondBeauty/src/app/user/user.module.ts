import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { CompanyComponent } from './company/company.component';
import { WorkerComponent } from './worker/worker.component';
import { LateralMenuComponent } from './lateral-menu/lateral-menu.component';



@NgModule({
  declarations: [CustomerComponent, CompanyComponent, WorkerComponent, LateralMenuComponent],
  imports: [
    CommonModule
  ],
  exports: [CompanyComponent, CustomerComponent, LateralMenuComponent, WorkerComponent]
})
export class UserModule { }
