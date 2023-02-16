import { Component, OnInit } from '@angular/core';
import { PackagesService } from '../packages.service';
import { Package } from '../package';

@Component({
  selector: 'app-package-y',
  templateUrl: './package-y.component.html',
  styleUrls: ['./package-y.component.css']
})
export class PackageYComponent implements OnInit {
  packages :Package[];

  constructor(private packageService : PackagesService) { }

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
