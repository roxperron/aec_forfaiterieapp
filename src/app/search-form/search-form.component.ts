import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Search } from '../search';
import { Package } from '../package';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  @Input() search?: Search;
  @Input() package?: Package;
  @Output() searchChange = new EventEmitter();

changeName(newName: string){
  this.searchChange.emit();
}


  constructor() { }

  ngOnInit(): void {
  }

}
