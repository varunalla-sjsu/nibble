import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';
import { EnumType } from 'typescript';
enum Gender {
  M = 'Male',
F='Female',
UA='Unavailable'
}
interface Employee{first_name:string,last_name:string,birth_date:string,email:string,gender:Gender,hire_date:string,role:string};
@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeedetailComponent implements OnInit {
  employeeid:string='';
  employee:Employee={
    first_name:'',
    last_name:'',
    birth_date:'',
    email:'',
    gender:Gender.UA,
    hire_date:'',
    role:''
  };
  constructor(  private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private employeeService:EmployeesService) { 

    }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(parameter => {
      console.log(parameter);
      this.employeeid = parameter.employeeid;
      this.loadDetails();
    });
  }
  loadDetails(){
      console.log('Employee id is : ',this.employeeid);
      this.employeeService.fetchUser(this.employeeid).subscribe((result: any) => {
        console.log(result);
        this.employee=result.employee as Employee;
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

}
