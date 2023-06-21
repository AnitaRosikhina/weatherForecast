import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from "@angular/forms";
import { debounceTime, distinctUntilChanged } from "rxjs";
import { ICity } from "../../interfaces/city";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
  @Input() items!: ICity[] | null;

  @Output() search = new EventEmitter<string>();
  @Output() selectOption = new EventEmitter<{ lat: number; lon: number }>();

  searchControl = new FormControl();

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(300),
      )
      .subscribe((res) => {
      this.search.emit(res);
    });
  }

  select(lat: number, lon: number): void {
    this.selectOption.emit({ lat, lon });
  }
}
