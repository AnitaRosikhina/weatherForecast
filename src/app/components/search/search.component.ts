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
  @Input() items!: ICity[];

  @Output() search = new EventEmitter<string>();

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
}
