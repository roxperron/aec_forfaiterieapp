import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackagesListComponent } from './packages-list/packages-list.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AboutComponent } from './about/about.component';
import { PackageXComponent } from './package-x/package-x.component';
import { PackageYComponent } from './package-y/package-y.component';


const routes: Routes = [
  {path: 'packages', component: PackagesListComponent},
  { path: '', redirectTo: '/packages', pathMatch: 'full' },
  {path: 'admin', component: AdminPanelComponent},
  {path: 'contact', component: ContactFormComponent },
  {path: 'about', component: AboutComponent },
  {path: 'about', component: AboutComponent },
  {path: 'packagex', component: PackageXComponent },
  {path: 'packagey', component: PackageYComponent},
  
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
