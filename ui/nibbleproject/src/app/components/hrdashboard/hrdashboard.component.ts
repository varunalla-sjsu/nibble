
// import * as Highcharts from 'highcharts';
// import HC_exporting from 'highcharts/modules/HC_exporting';
import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';

import {MatSnackBar} from '@angular/material/snack-bar';
import { HrService } from 'src/app/services/hr.service';


export interface UserRequest {
  username: string;
  raisedBy: string;
  type: string;
  requestid:string;
  departmentid:string;

}

const ELEMENT_DATA2: UserRequest[] = [
];

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' }
];

@Component({
  selector: 'app-hrdashboard',
  templateUrl: './hrdashboard.component.html',
  styleUrls: ['./hrdashboard.component.css']
})
export class HrdashboardComponent implements OnInit {
  
  // displayedColumns: string[] = ['name','action'];
  // dataSource: any;
  constructor(private hrservice:HrService ) { }
  // Highcharts = Highcharts;
  
  // bigChart? : any;
  // cards ? :any;
  // pieChart ? :any;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  // @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;
  // chartOptions = {};
//  paginator: MatPaginator;

  // constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
  }
  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;

  //   this.hrservice.getRequests().then((response:any)=>{
  //     console.log(response);
  //     this.dataSource=new MatTableDataSource<PeriodicElement>(response);
  //   });
    // this.userService.getDietitianReqs().then((response:any)=>{
    //   console.log(response);
    //   this.dataSource=new MatTableDataSource<UserRequest>(response);
    // });

  // }
  

}
