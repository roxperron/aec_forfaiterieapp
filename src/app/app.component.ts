import { Component } from '@angular/core';
import { Search } from './search';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Forfaiterie';
  search : Search = {
    name: '',
    categorie: '',
    price: 0
    

  }

}
