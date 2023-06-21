import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { WeatherService } from "./services/weather.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
  }

  searchCity(text: string): void {
    this.weatherService.getCityByText(text).subscribe();
  }
}
