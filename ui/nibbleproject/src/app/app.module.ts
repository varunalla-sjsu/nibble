import { MatPaginator } from '@angular/material/paginator';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { MyteamComponent } from './components/myteam/myteam.component';
import { UsersComponent } from './components/users/users.component';
import { RolesComponent } from './components/roles/roles.component';
import { AssignroleComponent } from './components/assignrole/assignrole.component';
import { PermissionsComponent } from './components/permissions/permissions.component';
import { EmployeedashboardComponent } from './components/employeedashboard/employeedashboard.component';
import { HrdashboardComponent } from './components/hrdashboard/hrdashboard.component';
import { ManagerdashboardComponent } from './components/managerdashboard/managerdashboard.component';
import { MaterialModule } from './modules/styling/material/material.module';
import { EmployeesHikeComponent } from './components/employees-hike/employees-hike.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
// mport { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { DepartmentsListComponent } from './components/departments-list/departments-list.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyprofileComponent,
    MyteamComponent,
    UsersComponent,
    RolesComponent,
    AssignroleComponent,
    PermissionsComponent,
    EmployeedashboardComponent,
    HrdashboardComponent,
    ManagerdashboardComponent,
    EmployeesHikeComponent,
    EmployeesComponent,
    EmployeesListComponent,
    DepartmentsComponent,
    DepartmentsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    NgxSkeletonLoaderModule,
    NgbModule,
    ShareIconsModule, 
    MDBBootstrapModule
  ],
  providers: [MatPaginator],
  bootstrap: [AppComponent]
})
export class AppModule { }
