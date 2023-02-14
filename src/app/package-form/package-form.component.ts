import {Component,OnInit} from '@angular/core';
import {PackagesService} from '../packages.service';
import {NgForm} from '@angular/forms';
import {Package} from '../package';
import {MatSnackBar} from '@angular/material/snack-bar';




@Component({
  selector: 'app-package-form',
  templateUrl: './package-form.component.html',
  styleUrls: ['./package-form.component.css']
})
export class PackageFormComponent implements OnInit {

  newPackage: Package = {
    name: '',
    description: '',
    lodging: {
      name:'',
      description:'',
      address: '',
      city: '',
      postalcode: '',
      phonenumber: '',
      email: '',
      website: '',
    },
    startdate: '2023-01-01',
    enddate: '2023-12-31',
    prenium:false,
    price: 0,
    newprice: 0
  }


  constructor(private packageService: PackagesService, private _snackBar : MatSnackBar) {}

  ngOnInit(): void {}


  addPackage(packageFormAdd: NgForm) {
    if (packageFormAdd.valid) {
      this.packageService.addPackage(this.newPackage).subscribe(
        _ => {
          packageFormAdd.resetForm();
          this._snackBar.open("Forfait enregistré avec succès!", undefined, {
            duration: 2000
            });
        }
      );
    }

  }
}
