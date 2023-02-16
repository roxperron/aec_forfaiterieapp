import { Component, OnInit } from '@angular/core';
import { PackagesService } from '../packages.service';
import { Package } from '../package';

@Component({
  selector: 'app-package-x',
  templateUrl: './package-x.component.html',
  styleUrls: ['./package-x.component.css']
})
export class PackageXComponent implements OnInit {
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
