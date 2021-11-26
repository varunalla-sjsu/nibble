import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    ManagerdashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
