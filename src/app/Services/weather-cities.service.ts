import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Icity } from '../Models/icity';
import { Iforecast } from '../Models/iforecast';

@Injectable({
  providedIn: 'root'
})
export class WeatherCitiesService {

  constructor(private httpClient: HttpClient) {}

  //Get all cities
  getAllCities():Observable<Icity[]>{
    return this.httpClient.get<Icity[]>(`${environment.APIURL}/forecast`);
  }

  //Get specific city by ID
  getSpecificCity(id:number):Observable<Icity>{
    return this.httpClient.get<Icity>(`${environment.APIURL}/cityForecast/${id}`)
  }

  //Get specific city by its name 
  getCityName(cityName:string):Observable<Icity[]>{
    return this.httpClient.get<Icity[]>(`${environment.APIURL}/search/${cityName}`)
  }

  //Get all cities by specific date
getCitiesByDate(date: string): Observable<Icity[]> {
  return this.httpClient.get<Icity[]>(`${environment.APIURL}/cities/${date}`);
}
}
