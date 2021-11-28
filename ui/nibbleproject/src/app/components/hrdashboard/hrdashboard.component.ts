
// import * as Highcharts from 'highcharts';
// import HC_exporting from 'highcharts/modules/HC_exporting';
import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';

import {MatSnackBar} from '@angular/material/snack-bar';
import { HrService } from 'src/app/services/hr.service';
import { AllocationService } from 'src/app/services/allocation.service';


export interface UserRequest {
  employee: string;
  raisedBy: string;
  type: string;
  requestid:string;
  departmentid:string;

}

const ELEMENT_DATA: UserRequest[] = [
];



@Component({
  selector: 'app-hrdashboard',
  templateUrl: './hrdashboard.component.html',
  styleUrls: ['./hrdashboard.component.css']
})
export class HrdashboardComponent implements OnInit {
  
  displayedColumns: string[] = ['employee', 'raisedby', 'type', 'departmentid'];
  dataSource : MatTableDataSource<UserRequest>;

  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // displayedColumns: string[] = ['name','action'];
  // dataSource: any;
  constructor(private hrservice:HrService , private allocationservice:AllocationService ) {

    this.dataSource = new MatTableDataSource<UserRequest>(ELEMENT_DATA);
   }


  ngOnInit() : void {
    // this.dataSource.paginator = this.paginator;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.hrservice.getRequests().then((response:any)=>{
      console.log(response);
      this.dataSource=new MatTableDataSource<UserRequest>(response);
    });
    
  }
  refresh(){
    this.hrservice.getRequests().then((response:any)=>{
      console.log(response);
      this.dataSource=new MatTableDataSource<UserRequest>(response);
    });
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
  async action(username:string,status:string){
    
    console.log(username+' : '+status);
    let resp=await this.allocationservice.approveReuest(username,status);
    if(resp){
     alert("request approved");
    this.refresh();
   }
  }



}
