import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherCitiesService } from '../../Services/weather-cities.service';
import { Icity } from 'src/app/Models/icity';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css']
})
export class CitiesListComponent implements OnInit, OnDestroy {
  cities!: Icity[];
  citiesSusbcribtions = new Subscription();
  searchTerm : string = '';
  searchCity !: Icity;
  date: string = '';
  constructor(private weatherService: WeatherCitiesService) {

  }

  ngOnInit(): void {
    this.getAllData();

  }
  //Get all data from API
  getAllData() {
    this.citiesSusbcribtions.add(this.weatherService.getAllCities().subscribe((data) => {
      // console.log(data);
      this.cities = data;
    },
    (error) => {
      console.error('Error occured to get all cities:', error);
    }
    ))
  }

  //Search for specific city by its name
  search(): void {
    this.weatherService.getCityName(this.searchTerm).subscribe((data: any) => {
      this.searchCity = data;
      console.log(data);
    });
  }

  //Search for cities by specific date
  searchByDate() {
    if (this.date) {
      this.weatherService.getCitiesByDate(this.date).subscribe(
        (res) => {
          // console.log(res);
          this.cities = Array.isArray(res) ? res : [];
        },
        (error) => {
          console.error('cannot search for cities by date:', error);
        }
      );
    } else {
      this.getAllData();
    }
  }
  ngOnDestroy(): void {
    this.citiesSusbcribtions.unsubscribe();

  }
}


