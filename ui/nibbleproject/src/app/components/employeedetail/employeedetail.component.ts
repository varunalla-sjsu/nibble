import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';
import { EnumType } from 'typescript';
import {Employee,Gender} from './../../models/user';
interface Role {
  value: string,
  viewValue: string
}

@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeedetailComponent implements OnInit {
  roles: Role[] = [
    { value: 'manager', viewValue: 'Manager' },
    { value: 'employee', viewValue: 'Employee' },
    { value: 'hr', viewValue: 'HR' }
  ];
  employeeid: string = '';
  employee: Employee = {
    first_name: '',
    last_name: '',
    birth_date: '',
    email: '',
    gender: Gender.UA,
    hire_date: '',
    role: ''
  };
  constructor(private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private employeeService: EmployeesService) {

  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(parameter => {
      console.log(parameter);
      this.employeeid = parameter.employeeid;
      this.loadDetails();
    });
  }
  loadDetails() {
    console.log('Employee id is : ', this.employeeid);
    this.employeeService.fetchUser(this.employeeid).subscribe((result: any) => {
      console.log(result);
      this.employee = result.employee as Employee;
    },
      err => {
        console.log('Error Fetching Data');
      });
  }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  addEmail() {
    console.log(this.email.value);

    this.employeeService.addEmail(this.employeeid, this.email.value).subscribe((result: any) => {
      console.log(result);
    },
      err => {
        console.log('Error Fetching Data');
      });
  }
  updateRole() {
    console.log(this.employee.role);

    this.employeeService.updateRole(this.employeeid, this.email.value, this.employee.role).subscribe((result: any) => {
      console.log(result);
    },
      err => {
        console.log('Error Fetching Data');
      });
  }
  getDate(date: string) {
    return (new Date(date)).toDateString();
  }
}
