import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from '../error-page/error-page.component';
import { AdminColisRequestsComponent } from './admin-colis-requests/admin-colis-requests.component';
import { ColisAddComponent } from './colis-add/colis-add.component';
import { ColisEditComponent } from './colis-edit/colis-edit.component';
import { ColisListComponent } from './colis-list/colis-list.component';
import { ColisStartComponent } from './colis-start/colis-start.component';
import { CoursesComponent } from './courses/courses.component';


import { DashComponent } from './dash/dash.component';

import { DashboardComponent } from './dashboard.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeesManagemenetComponent } from './employees-managemenet/employees-managemenet.component';
import { HomeComponent } from './home/home.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { TrackColisComponent } from './track-colis/track-colis.component';
import { VehiculesAddComponent } from './vehicules-add/vehicules-add.component';
import { VehiculesEditComponent } from './vehicules-edit/vehicules-edit.component';
import { VehiculesListComponent } from './vehicules-list/vehicules-list.component';




const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full' },
  { path: 'home', component:HomeComponent , children:[
    { path:"", component:DashComponent },
    { path:"dash", component:DashComponent },

    { path:'admin-employees', component:EmployeesManagemenetComponent },
    { path:'admin-employees-add', component:EmployeeAddComponent },
    { path:'admin-employees-edit/:id', component:EmployeeEditComponent },
    { path:'admin-colis-request', component:AdminColisRequestsComponent },
    { path:'colis/start/:id', component:ColisStartComponent },
    
    { path:'colis/track/:id', component:TrackColisComponent },


    { path:"edit-profile", component:ProfileUpdateComponent },
    

    { path:'vehicules', component:VehiculesListComponent },
    { path:'vehicules-add', component:VehiculesAddComponent },
    { path:'vehicules-edit/:id', component:VehiculesEditComponent },

    { path:'colis', component:ColisListComponent },
    { path:'colis-add', component:ColisAddComponent },
    { path:'colis-edit/:id', component:ColisEditComponent },
    
    { path:'courses', component:CoursesComponent }
    
    
    
    
  ] },
  { path:'colis/invoice/:id', component:InvoiceComponent },
  { path: 'error-page', component: ErrorPageComponent  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
