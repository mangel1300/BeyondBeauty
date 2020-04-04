import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferOfTheDayComponent } from './offer-of-the-day/offer-of-the-day.component';
import { OfferOfTheWeekComponent } from './offer-of-the-week/offer-of-the-week.component';
import { OfferOfTheMonthComponent } from './offer-of-the-month/offer-of-the-month.component';



@NgModule({
  declarations: [OfferOfTheDayComponent, OfferOfTheWeekComponent, OfferOfTheMonthComponent],
  imports: [
    CommonModule
  ],
  exports: [OfferOfTheDayComponent, OfferOfTheWeekComponent, OfferOfTheMonthComponent]
})
export class OffersModule { }
