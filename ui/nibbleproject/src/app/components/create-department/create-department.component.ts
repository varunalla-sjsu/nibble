import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DepartmentsService } from 'src/app/services/departments.service';
@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent implements OnInit {
  createDeptForm: FormGroup = this.formBuilder.group({});
  constructor(private formBuilder: FormBuilder, private deptService: DepartmentsService, private snackBar: MatSnackBar,private router:Router) { }

  ngOnInit(): void {
    this.createDeptForm = this.formBuilder.group({
      deptname: [null, [Validators.required]]
    });
  }
  async submit() {
    if (!this.createDeptForm.valid) {
      return;
    }
    console.log(this.createDeptForm.value);
    try {
      let dept=this.createDeptForm.value;
      let res = await this.deptService.createDepartments(dept.deptname).toPromise();
      console.log('create dept response ',res);
      this.snackBar.open("Created Department", 'dismiss', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      this.router.navigate(['/departments']);
    }
    catch (err) {
      console.log(err);
      this.snackBar.open("Could Create Department", 'dismiss', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
    }
  }
}
