import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Icity } from 'src/app/Models/icity';
import { WeatherCitiesService } from 'src/app/Services/weather-cities.service';

@Component({
  selector: 'app-specific-city',
  templateUrl: './specific-city.component.html',
  styleUrls: ['./specific-city.component.css']
})
export class SpecificCityComponent implements OnInit, OnDestroy {
  city_id: any;
  city!: Icity;
  degreeSelected: string = 'cel';
  citiySusbcribtions = new Subscription();

  constructor(private activatedRoute: ActivatedRoute, private weatherService: WeatherCitiesService) {
    if (this.activatedRoute.snapshot.paramMap.get('id')) {
      this.city_id = this.activatedRoute.snapshot.paramMap.get('id');
    }
  }

  ngOnInit(): void {
    this.citiySusbcribtions.add(this.weatherService.getSpecificCity(this.city_id).subscribe((data) => {
      this.city = data;
    }));
  }

  ngOnDestroy(): void {
    this.citiySusbcribtions.unsubscribe();
  }

  checkboxClicked() {
    this.degreeSelected = this.degreeSelected === 'cel' ? 'F' : 'cel';
  }
}

