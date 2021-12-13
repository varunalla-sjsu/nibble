import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';
import { EnumType } from 'typescript';
import { Employee, Gender } from './../../models/user';
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
    private employeeService: EmployeesService, private snackBar: MatSnackBar) {

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
        this.snackBar.open("Could Not load data", 'dismiss', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center'
        });
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
      if (result.status == "success")
        this.snackBar.open("updated email", 'dismiss', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center'
        });
      else {
        this.snackBar.open("problem updating email", 'dismiss', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center'
        });
      }
    },
      err => {
        console.log('Error Fetching Data');
        this.snackBar.open("Could Not add email", 'dismiss', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center'
        });
      });
  }
  updateRole() {
    console.log(this.employee.role);

    this.employeeService.updateRole(this.employeeid, this.email.value, this.employee.role).subscribe((result: any) => {
      console.log(result);
      this.snackBar.open("updated role", 'dismiss', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      });
    },
      err => {
        console.log('Error Fetching Data');
        this.snackBar.open("Could Not update role ", 'dismiss', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center'
        });
      });
  }
  getDate(date: string) {
    return (new Date(date)).toDateString();
  }
}
