import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';

import { Employee, Gender } from './../../models/user';
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  employee: Employee = {
    first_name: '',
    last_name: '',
    birth_date: '',
    email: '',
    gender: Gender.UA,
    hire_date: '',
    role: ''
  }
  constructor(private employeeService: EmployeesService) { }

  ngOnInit(): void {
    this.loadDetails();
  }
  loadDetails() {
    console.log('Current Login');
    this.employeeService.getProfile().subscribe((result: any) => {
      console.log(result);
      this.employee = result.data as Employee;
      console.log(this.employee)
    },
      err => {
        console.log('Error Fetching Data');
      });
  }
  getDate(date: string) {
    return (new Date(date)).toDateString();
  }
}
