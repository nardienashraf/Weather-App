import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityComponent } from './city/city.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CityComponent],
  imports: [CommonModule, RouterModule],
  exports: [CityComponent]
})
export class SharedModule { }
