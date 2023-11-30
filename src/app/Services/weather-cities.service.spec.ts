import { TestBed } from '@angular/core/testing';

import { WeatherCitiesService } from './weather-cities.service';

describe('WeatherCitiesService', () => {
  let service: WeatherCitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherCitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
