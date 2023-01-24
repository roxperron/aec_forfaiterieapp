import { Component, OnInit } from '@angular/core';
/* import { inject} from '@angular/core';
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar'; */

@Component({
  selector: 'app-package-form',
  templateUrl: './package-form.component.html',
  styleUrls: ['./package-form.component.css']
})
export class PackageFormComponent implements OnInit {

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
  startDate:'',
  endDate:'',
  prenium: '',
  regPrice:'',
  promoPrice:''
}



submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted = true;

  }

  openSnackBar(){
    
  }

 

/*   @Component({
    selector: 'snack-bar-annotated-component-example',
    templateUrl: 'snack-bar-annotated-component-example.html',
    styleUrls: ['snack-bar-annotated-component-example.css'],
  })
  export class SnackBarAnnotatedComponentExample {
    durationInSeconds = 5;
  
    constructor(private _snackBar: MatSnackBar) {}
  
    openSnackBar() {
      this._snackBar.openFromComponent(PizzaPartyAnnotatedComponent, {
        duration: this.durationInSeconds * 1000,
      });
    }
  } */

}
