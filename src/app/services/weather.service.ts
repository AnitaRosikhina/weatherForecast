import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class WeatherService {
  private API_KEY = '2ca7f9dad835472284c94348232106';

  constructor(private httpClient: HttpClient) {}

  getWeatherByCity(city: string): Observable<any> {
    return this.httpClient.get('https://api.weatherapi.com/v1/current.json', {
      params: {
        key: this.API_KEY,
        q: city
      }
    });
  }

  getCityByText(text: string): Observable<any> {
    return this.httpClient.get('https://api.weatherapi.com/v1/search.json', {
      params: {
        key: this.API_KEY,
        q: text
      }
    });
  }
}
