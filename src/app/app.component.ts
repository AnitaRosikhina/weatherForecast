import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { WeatherService } from "./services/weather.service";
import { ICity } from "./interfaces/city";
import { Observable } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  cities$!: Observable<ICity[]>;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  searchCity(text: string): void {
    if (text.trim()) {
      this.cities$ = this.weatherService.getCityByText(text);
    }
  }
}
