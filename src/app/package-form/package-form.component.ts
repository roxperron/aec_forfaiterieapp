import {Component,OnInit} from '@angular/core';
import {PackagesService} from '../packages.service';
import {NgForm} from '@angular/forms';
import {Package} from '../package';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-package-form',
  templateUrl: './package-form.component.html',
  styleUrls: ['./package-form.component.css']
})

export class PackageFormComponent implements OnInit {

  newPackage: Package = {
    code: '',
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
    startdate:'',
    enddate: '',
    prenium:false,
    price: 0,
    newprice: 0,
    rank:'',
    categories:[],
    reviews:[
      {
        rating:0,
        comments:''
      }
    ]
  }


  constructor(private packageService: PackagesService, private _snackBar : MatSnackBar, public dialogRef: MatDialogRef<PackageFormComponent>) {}

  ngOnInit(): void {}


  addPackage(packageFormAdd: NgForm) {
    if (packageFormAdd.valid) {
      this.packageService.addPackage(this.newPackage).subscribe(
        _ => {
          packageFormAdd.resetForm();
          this.dialogRef.close();
        }
      );
    }
  }
   cancel(){
    this.dialogRef.close();
   }
}
