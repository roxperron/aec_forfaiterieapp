import { Component, OnInit, Input } from '@angular/core';
import { Package } from '../package';
import { PackagesService } from '../packages.service';


@Component({
  selector: 'app-mini-card-package',
  templateUrl: './mini-card-package.component.html',
  styleUrls: ['./mini-card-package.component.css']
})
export class MiniCardPackageComponent implements OnInit {
@Input() package?: Package;
 packages:Package[];

  constructor(private packageService: PackagesService) { }

  ngOnInit(): void {
    this.getPackages();
  }

  getPackages(): void{
     this.packageService.getPackages()
     .subscribe(resultat => this.packages = resultat);
  }

}
