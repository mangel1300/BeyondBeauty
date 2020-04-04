import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { ContactingModule } from './contacting/contacting.module';
import { EspecificServicesModule } from './especific-services/especific-services.module';
import { FAQModule } from './faq/faq.module';
import { FooterModule } from './footer/footer.module';
import { GeneralServicesModule } from './general-services/general-services.module';
import { GlocalsModule } from './glocals/glocals.module';
import { HeaderModule } from './header/header.module';
import { LoginModule } from './login/login.module';
import { OffersModule } from './offers/offers.module';
import { PaymentModule } from './payment/payment.module';
import { StartModule } from './start/start.module';
import { UserModule } from './user/user.module';
import { HelpUsModule } from './help-us/help-us.module';









@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    FormsModule,
    ContactingModule,
    EspecificServicesModule,
    FAQModule,
    FooterModule,
    GeneralServicesModule,
    GlocalsModule,
    HeaderModule,
    HelpUsModule,
    LoginModule,
    OffersModule,
    PaymentModule,
    StartModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
