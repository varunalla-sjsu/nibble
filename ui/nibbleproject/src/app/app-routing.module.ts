import { EmployeesHikeComponent } from './components/employees-hike/employees-hike.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HrdashboardComponent } from './components/hrdashboard/hrdashboard.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { AuthorizationGuard } from './guards/authorization.guard';
import { ProfileComponent } from './components/profile/profile.component';
import { CreateDepartmentComponent } from './components/create-department/create-department.component';
import { ManagerdashboardComponent } from './components/managerdashboard/managerdashboard.component';
import {EmployeedetailComponent} from './components/employeedetail/employeedetail.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch:'full' },
  {
    path: 'app-hrdashboard',
    component: HrdashboardComponent,
    canActivate: [AuthorizationGuard],
    data: {
      expectedRole: ['hr','admin']
    }
  },
  {
    path: 'app-managerdashboard',
    component: ManagerdashboardComponent,
    canActivate: [AuthorizationGuard],
    data: {
      expectedRole: ['manager']
    }
  },
  {
    path: 'hike', component: EmployeesHikeComponent,
    canActivate: [AuthorizationGuard],
    data: {
      expectedRole: ['manager','admin']
    }
  },
  {
    path: 'employees', component: EmployeesComponent,
  },
  {
    path: 'departments', component: DepartmentsComponent, canActivate: [AuthorizationGuard],
    data: {
      expectedRole: ['admin']
    }
  },{
    path: 'createdept', component: CreateDepartmentComponent, canActivate: [AuthorizationGuard],
    data: {
      expectedRole: ['admin']
    }
  },
  {
    path: 'employee/:employeeid', component: EmployeedetailComponent, canActivate: [AuthorizationGuard],
    data: {
      expectedRole: ['admin']
    }
  },
  {
    path: 'profile', component: MyprofileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
