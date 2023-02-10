import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackagesListComponent } from './packages-list/packages-list.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

const routes: Routes = [
  {path: 'packages', component: PackagesListComponent},
  { path: '', redirectTo: '/packages', pathMatch: 'full' },
  {path: 'admin', component: AdminPanelComponent},
  {path: 'contact', component: ContactFormComponent },
  
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
