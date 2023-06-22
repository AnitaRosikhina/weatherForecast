import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ICity } from "../interfaces/city";

@Injectable()
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  getWeatherByLatLon(lat: number, lon: number): Observable<any> {
    return this.httpClient.get('https://api.weatherapi.com/v1/current.json', {
      params: {
        q: lat + ',' + lon
      }
    });
  }

  getCityByText(text: string): Observable<ICity[]> {
    return this.httpClient.get<ICity[]>('https://api.weatherapi.com/v1/search.json', {
      params: {
        q: text
      }
    });
  }
}
