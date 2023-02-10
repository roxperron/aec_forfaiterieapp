import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PackagesListComponent } from './packages-list/packages-list.component';
import { PackageComponent } from './package/package.component';
import { MiniCardPackageComponent } from './mini-card-package/mini-card-package.component';
import { PackageFormComponent } from './package-form/package-form.component';
import { PriceComponent } from './price/price.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { ReviewsFormComponent } from './reviews-form/reviews-form.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSliderModule} from '@angular/material/slider';
import { ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { PackgagebylodgingPipe } from './packgagebylodging.pipe';
import { PremiumPipe } from './premium.pipe';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';

import { PackagesService } from './packages.service';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './navigation/navigation.component';







@NgModule({
  declarations: [
    AppComponent,
    PackagesListComponent,
    PackageComponent,
    MiniCardPackageComponent,
    PackageFormComponent,
    PriceComponent,
    ReviewsFormComponent,
    ContactFormComponent,
    SearchFormComponent,
    PackgagebylodgingPipe,
    PremiumPipe,
    AdminPanelComponent,
    NavigationComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    FormsModule,
    MatListModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    NgbModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
 

  ],

  providers: [PackagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
