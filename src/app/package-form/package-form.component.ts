import {Component,Inject,OnInit} from '@angular/core';
import {PackagesService} from '../packages.service';
import {NgForm} from '@angular/forms';
import {Package} from '../package';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


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


  constructor(
    private packageService: PackagesService,  
    public dialogRef: MatDialogRef<PackageFormComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: Package) {

      if(data){
        this.newPackage = data;
      }
    }

  ngOnInit(): void {}


  addPackage(packageFormAdd: NgForm) {
    if (packageFormAdd.valid) {
      this.packageService.addPackage(this.newPackage).subscribe(
        _ => {
          packageFormAdd.resetForm();
          this.dialogRef.close("Forfait ajouté!");
        }
      );
    }
  }

  updatePackage(packageFormAdd: NgForm) {
    if (packageFormAdd.valid) {
      this.packageService.updatePackage(this.newPackage).subscribe(
        _ => {
          packageFormAdd.resetForm();
          this.dialogRef.close("Forfait modifié!");
        }
      );
    }
  }

   cancel(){
    this.dialogRef.close();
   }
}
