import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from "@angular/forms";
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from "rxjs";
import { City } from "../../interfaces/city";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit, OnDestroy {
  @Input() items!: City.Data[] | null;

  @Output() search = new EventEmitter<string>();
  @Output() selectOption = new EventEmitter<City.Coordinates>();

  searchControl = new FormControl();
  destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        distinctUntilChanged(),
        debounceTime(300),
      )
      .subscribe((res) => {
      this.search.emit(res);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  select(lat: number, lon: number): void {
    this.selectOption.emit({ lat, lon });
  }

  getOptionValue({ country, region, name }: City.Data): string {
    return `${country} | ${region} | ${name}`;
  }
}
