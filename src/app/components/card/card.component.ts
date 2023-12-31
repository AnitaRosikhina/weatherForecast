import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Forecast } from "../../interfaces/forecast";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
  @Input() item!: Forecast.Data | null;

  constructor() { }

  ngOnInit(): void {}
}
