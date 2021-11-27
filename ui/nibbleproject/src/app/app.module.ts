import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { MyteamComponent } from './components/myteam/myteam.component';
import { AllocationComponent } from './components/allocation/allocation.component';
import { ResourcerequestComponent } from './components/resourcerequest/resourcerequest.component';
import { UsersComponent } from './components/users/users.component';
import { RolesComponent } from './components/roles/roles.component';
import { AssignroleComponent } from './components/assignrole/assignrole.component';
import { PermissionsComponent } from './components/permissions/permissions.component';
import { EmployeedashboardComponent } from './components/employeedashboard/employeedashboard.component';
import { HrdashboardComponent } from './components/hrdashboard/hrdashboard.component';
import { ManagerdashboardComponent } from './components/managerdashboard/managerdashboard.component';
import { MaterialModule } from './modules/styling/material/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
// import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { FlexLayoutModule } from "@angular/flex-layout";
import { LayoutModule } from '@angular/cdk/layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule  } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider'
import { MatCardModule } from '@angular/material/card'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatTableModule } from '@angular/material/table'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyprofileComponent,
    MyteamComponent,
    AllocationComponent,
    ResourcerequestComponent,
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
    MaterialModule,
    NgbModule,
    FormsModule,
    MatCardModule,
    MatExpansionModule,
    CdkAccordionModule,
    FlexLayoutModule,
    LayoutModule,
    MatGridListModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
