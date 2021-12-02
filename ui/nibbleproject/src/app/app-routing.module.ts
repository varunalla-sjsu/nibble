import { EmployeesHikeComponent } from './components/employees-hike/employees-hike.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HrdashboardComponent } from './components/hrdashboard/hrdashboard.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { AuthorizationGuard } from './guards/authorization.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'app-hrdashboard',
    component: HrdashboardComponent,
    canActivate: [AuthorizationGuard],
    data: {
      expectedRole: ['hr','admin']
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
