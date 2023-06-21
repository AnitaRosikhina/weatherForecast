import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from "@angular/forms";
import { debounceTime, distinctUntilChanged } from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() items: any;

  @Output() search = new EventEmitter<string>();

  searchControl = new FormControl();

  constructor() { }

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
