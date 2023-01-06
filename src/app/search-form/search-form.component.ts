import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Search } from '../search';



@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  @Input() search?: Search;
  @Output() searchChange = new EventEmitter();
  

changeName(newName: string){
  this.searchChange.emit(this.changeName);
}


  constructor() { }

  ngOnInit(): void {
  }

}
