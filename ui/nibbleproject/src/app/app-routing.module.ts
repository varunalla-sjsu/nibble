import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrdashboardComponent } from './components/hrdashboard/hrdashboard.component';

const routes: Routes = [{
  path: '', component: HrdashboardComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
