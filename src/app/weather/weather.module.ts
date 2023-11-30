import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { CitiesListComponent } from './cities-list/cities-list.component';
import { SpecificCityComponent } from './specific-city/specific-city.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CitiesListComponent,
    SpecificCityComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class WeatherModule { }
