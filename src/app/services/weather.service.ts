import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) {}

  getWeatherByCity(): Observable<any>{
    return this.httpClient.get(`https://api.weatherapi.com/v12ca7f9dad835472284c94348232106`)
  }
}
