import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HrdashboardComponent } from './components/hrdashboard/hrdashboard.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'app-hrdashboard',component:HrdashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
