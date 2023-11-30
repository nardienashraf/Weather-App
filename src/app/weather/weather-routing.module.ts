import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesListComponent } from './cities-list/cities-list.component';
import { SpecificCityComponent } from './specific-city/specific-city.component';

const routes: Routes = [
  { path: '', component: CitiesListComponent },
  { path: 'city/:id', component: SpecificCityComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
