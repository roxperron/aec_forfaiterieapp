import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  MatTableDataSource
} from '@angular/material/table';
import {
  MatPaginator
} from '@angular/material/paginator';
import {
  MatSort
} from '@angular/material/sort';
import {
  Package
} from '../package';
import {
  PACKAGES
} from '../mock-packages';
import {
  PackagesService
} from '../packages.service';
import {
  MatSnackBar
} from '@angular/material/snack-bar';


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  packages: Package[] = [];
  displayedColumns = ['code', 'name', 'lodgingName', 'startdate', 'enddate', 'price', 'newprice', 'supprimer'];
  dataSourcePackage: MatTableDataSource < Package > = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  constructor(private packageService: PackagesService, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.getPackages();
  }

  getPackages() {
    this.packageService.getPackages().subscribe(
      resultat => {
        this.dataSourcePackage = new MatTableDataSource(resultat);
        this.dataSourcePackage.paginator = this.paginator;
        this.dataSourcePackage.sort = this.sort;
      }
    );



  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourcePackage.filter = filterValue.trim().toLowerCase();

    if (this.dataSourcePackage.paginator) {
      this.dataSourcePackage.paginator.firstPage();
    }
  }

  deletePackage(id: number) {
    this.packageService.deletePackage(id).subscribe(
      _ => {
        this.getPackages();
        this._snackBar.open("Forfait supprimé!", undefined, {
          duration: 2000
        });
      }
    );
  }



}
