import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { WeatherService } from "./services/weather.service";
import { City } from "./interfaces/city";
import { Observable } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  cities$!: Observable<City.Data[]>;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  searchCity(text: string): void {
    if (text.trim()) {
      this.cities$ = this.weatherService.getCityByText(text);
    }
  }

  getTodaysForecast({ lat, lon }: City.Coordinates): void {
    this.weatherService.getWeatherByLatLon(lat, lon).subscribe();
  }
}
