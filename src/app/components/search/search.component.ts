import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from "@angular/forms";
import { debounceTime, distinctUntilChanged, filter, Subject, takeUntil, tap } from "rxjs";
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
  isOptionSelected = false;

  destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.listenValueChanges();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  listenValueChanges(): void {
    this.searchControl.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        distinctUntilChanged(),
        filter(() => !this.isOptionSelected),
        debounceTime(400),
      )
      .subscribe((res) => {
        this.search.emit(res);
      });
  }

  select(lat: number, lon: number): void {
    this.isOptionSelected = true;
    this.selectOption.emit({ lat, lon });
    // TODO: make a better decision
    setTimeout(() => this.isOptionSelected = false, 0);
  }

  getOptionValue({ country, region, name }: City.Data): string {
    return `${country} | ${region} | ${name}`;
  }
}
