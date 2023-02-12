import {
  Component,
  OnInit
} from '@angular/core';
import {
  PackagesService
} from '../packages.service';
import {
  NgForm
} from '@angular/forms';
import {
  Package
} from '../package';
import {
  PACKAGES
} from '../mock-packages';




@Component({
  selector: 'app-package-form',
  templateUrl: './package-form.component.html',
  styleUrls: ['./package-form.component.css']
})
export class PackageFormComponent implements OnInit {
  dataSource = PACKAGES;

  newPackage = {
    name: '',
    description: '',
    lodging: '',
    address: '',
    city: '',
    postalCode: '',
    phoneNumber: '',
    email: '',
    website: '',
    note: '',
    startDate: '',
    endDate: '',
    prenium: '',
    regPrice: '',
    promoPrice: ''
  }


  constructor(private packageService: PackagesService) {}

  ngOnInit(): void {}

  getPackages() {
    this.packageService.getPackages().subscribe(
      resultat => {
        this.dataSource = resultat;

      }
    );
  }

/* 
  addPackage(packageFormAdd: NgForm) {
    if (packageFormAdd.valid) {
      this.packageService.addPackage(this.newPackage).subscribe(
        _ => {
          packageFormAdd.resetForm();
          this.getPackages();
        }
      );
    }

  } */
}
