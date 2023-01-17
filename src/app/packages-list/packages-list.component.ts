import { Component, OnInit } from '@angular/core';
import { PACKAGES } from '../mock-packages';
import { Input } from '@mui/material';
import { Search } from '../search';



@Component({
  selector: 'app-packages-list',
  templateUrl: './packages-list.component.html',
  styleUrls: ['./packages-list.component.css']
})
export class PackagesListComponent implements OnInit {
packages = PACKAGES
@Input() search: Search;

  constructor() { }

  ngOnInit(): void {
  }

}
