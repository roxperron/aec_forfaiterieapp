import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
/* import { Search } from '../search'; */




@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
/* @Input() search: Search;
@Output() searchChange = new EventEmitter();

changeName(){
let newSearch :  Search = {
  name =  new value,
  categorie = this.search.categorie,
  price = this.search.price
};
  this.search = newSearch;
  this.searchChange.emit(newSearch);
}

changeCategorie(){
  let newSearch :  Search = {
    name =  this.search.name,
    categorie = this.search.categorie,
    price = this.search.price
  };
    this.search = newSearch;
    this.searchChange.emit(newSearch);
  }

  changePrice(){
    let newSearch :  Search = {
      name =  this.search.name,
      categorie = this.search.categorie,
      price = this.search.price
    };
      this.search = newSearch;
      this.searchChange.emit(newSearch);
    }
     */

  constructor() { }

  ngOnInit(): void {
  }
  
}
  





 


