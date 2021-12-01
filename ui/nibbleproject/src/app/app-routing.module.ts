import { EmployeesHikeComponent } from './components/employees-hike/employees-hike.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'hike',component: EmployeesHikeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
