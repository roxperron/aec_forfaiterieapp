import { Component, OnInit } from '@angular/core';
import { PACKAGES } from '../mock-packages';
/* import { Search } from '../search'; */
import { PackagesService } from '../packages.service';
import { Package } from '../package';



@Component({
  selector: 'app-packages-list',
  templateUrl: './packages-list.component.html',
  styleUrls: ['./packages-list.component.css']
})
export class PackagesListComponent implements OnInit {
packages :Package[];
/* @Input() search: Search; */

  constructor(private packageService: PackagesService) { }

  ngOnInit(): void {
    this.getPackages();
  }

  getPackages(): void{
    this.packageService.getPackages()
    .subscribe(resultat => {
      this.packages = resultat;
      console.log(this.packages);
    });
  }

}
