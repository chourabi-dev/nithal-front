import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeesManagemenetComponent } from './employees-managemenet/employees-managemenet.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { DashComponent } from './dash/dash.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';


import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ChartsModule } from 'ng2-charts';
import { VehiculesListComponent } from './vehicules-list/vehicules-list.component';
import { VehiculesAddComponent } from './vehicules-add/vehicules-add.component';
import { VehiculesEditComponent } from './vehicules-edit/vehicules-edit.component';
import { ColisListComponent } from './colis-list/colis-list.component';
import { ColisAddComponent } from './colis-add/colis-add.component';
import { ColisEditComponent } from './colis-edit/colis-edit.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { AdminColisRequestsComponent } from './admin-colis-requests/admin-colis-requests.component';
import { ColisStartComponent } from './colis-start/colis-start.component';
import { CoursesComponent } from './courses/courses.component';
import { TrackColisComponent } from './track-colis/track-colis.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';


@NgModule({
  declarations: [DashboardComponent, HomeComponent, EmployeesManagemenetComponent, EmployeeAddComponent, DashComponent, EmployeeEditComponent, VehiculesListComponent, VehiculesAddComponent, VehiculesEditComponent, ColisListComponent, ColisAddComponent, ColisEditComponent, InvoiceComponent, AdminColisRequestsComponent, ColisStartComponent, CoursesComponent, TrackColisComponent, ProfileUpdateComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule, ReactiveFormsModule, Ng2SmartTableModule, ChartsModule
  ]
})
export class DashboardModule { }
