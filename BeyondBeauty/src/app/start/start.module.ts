import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { PrincipalOptionsComponent } from './principal-options/principal-options.component';
import { LocalOfTheDayComponent } from './local-of-the-day/local-of-the-day.component';



@NgModule({
  declarations: [CarrouselComponent, PrincipalOptionsComponent, LocalOfTheDayComponent],
  imports: [
    CommonModule
  ], exports: [CarrouselComponent, LocalOfTheDayComponent, PrincipalOptionsComponent]
})
export class StartModule { }
