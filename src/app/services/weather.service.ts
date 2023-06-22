import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { City } from "../interfaces/city";
import { Forecast } from "../interfaces/forecast";

@Injectable()
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  getWeatherByLatLon(lat: number, lon: number): Observable<Forecast.Data> {
    return this.httpClient.get<Forecast.Data> ('https://api.weatherapi.com/v1/current.json', {
      params: { q: lat + ',' + lon }
    });
  }

  getCityByText(text: string): Observable<City.Data[]> {
    return this.httpClient.get<City.Data[]>('https://api.weatherapi.com/v1/search.json', {
      params: { q: text }
    });
  }
}
