import { Component, OnInit } from '@angular/core';
import { PACKAGES } from '../mock-packages';

@Component({
  selector: 'app-packages-list',
  templateUrl: './packages-list.component.html',
  styleUrls: ['./packages-list.component.css']
})
export class PackagesListComponent implements OnInit {
packages = PACKAGES


  constructor() { }

  ngOnInit(): void {
  }

}
