import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { DepartmentsService } from 'src/app/services/departments.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  currentUser?: User;
  barChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46, 33], label: 'Departments' }
  ];
  constructor(private departmentService: DepartmentsService,private userService:UserService, private snackBar: MatSnackBar) {

  }
 
  async ngOnInit() {
    this.userService.loadUser();
    this.userService.currentUser.subscribe((data: User) => {
      this.currentUser = data;
    }, (err) => {
      console.log('No user details');
    });
    this.departmentService.departmentsChart().subscribe((res: any) => {
      console.log(res);
      this.barChartData = [{
        data: res.data.map((point: any) => {
          return point.employeecount;
        }),
        label: 'Departments'
      }];
      this.barChartLabels = [
        ...res.data.map((point: any) => {
          return point.dept_name;
        })]
    }
      ,
      (err) => {
        console.log(err);
        this.snackBar.open('Error while getting department data', 'dismiss', {
          duration: 3000
        })
      });
  }
  checkAccess(allowed: string[]) {
    if (this.currentUser && this.currentUser?.roles) {
      if (this.checkRole(allowed, this.currentUser.roles))
        return true;
      else
        return false;
    }
    else
      return false;
  }
  checkRole(allowed: string[], current: string[]): boolean {
    let roles: any = {};
    for (let i = 0; i < current.length; i++) {
      roles[current[i]] = true;
    }
    for (let i = 0; i < allowed.length; i++) {
      if (roles[allowed[i]]) {
        return true;
      }
    }
    return false;
  }
}
