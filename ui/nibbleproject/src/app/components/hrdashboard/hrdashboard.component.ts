
// import * as Highcharts from 'highcharts';
// import HC_exporting from 'highcharts/modules/HC_exporting';
import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';

import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
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
  users!: any[];
  loading: boolean = true;
  dataSource = new MatTableDataSource<any>();
  departments : any;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // constructor(private http: HttpClient) {

  // }

  constructor(private hrservice:HrService , private allocationservice:AllocationService , private http: HttpClient) {

    // this.dataSource = new MatTableDataSource(ELEMENT_DATA);
   }
  displayedColumns: string[] = ['employee', 'raisedby', 'type', 'departmentid','action'];
  // dataSource : MatTableDataSource<UserRequest>;

  
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;

  // displayedColumns: string[] = ['name','action'];
  // dataSource: any;
  
  async ngOnInit() {
    // this.dataSource.paginator = this.paginator;
    // debugger;
    this.getData('0', '5');

    this.departments = await this.hrservice.getDepartmentsInfo();
  }
  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;

  //   this.hrservice.getRequests().then((response:any)=>{
  //     console.log(response);
  //     this.dataSource=new MatTableDataSource<UserRequest>(response);
  //   });
    
  // }
  // refresh(){
  //   this.hrservice.getRequests().then((response:any)=>{
  //     console.log(response);
  //     this.dataSource=new MatTableDataSource<UserRequest>(response);
  //   });
  // }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
  async action(username:string,status:string){
    
    console.log(username+' : '+status);
    let resp=await this.allocationservice.approveRequest(username,status);
    
    if(resp){
     alert("request approved");
    // this.refresh();
   }
  }

  // constructor(private http: HttpClient) {

  // }

  async getData(offset : string, limit : string){
    let params = new HttpParams();
    params = params.set('skip', offset);
    params = params.set('limit', limit);

   await this.hrservice.getRequests(params.toString())
    .then((response: any) =>{
      // debugger;
      this.loading = false;
      this.users = response;
      this.users.length = response.length;

      this.dataSource = new MatTableDataSource<any>(this.users);
      this.dataSource.paginator = this.paginator;
      // debugger;
    })
  }

  async getNextData(currentSize:any, offset:any, limit:any){
    let params = new HttpParams();
    params = params.set('skip', offset);
    params = params.set('limit', limit);
    // debugger;
    await this.hrservice.getRequests(params.toString())
    .then((response: any) =>{

      this.loading = false;

      this.users.length = currentSize;
      this.users.push(...response.users);

      this.users.length = response.total;

      this.dataSource = new MatTableDataSource<any>(this.users);
      this.dataSource._updateChangeSubscription();

      this.dataSource.paginator = this.paginator;
  
    })
  } 

  pageChanged(event:any){
    this.loading = true;

    let pageIndex = event.pageIndex;
    let pageSize = event.pageSize;

    let previousIndex = event.previousPageIndex;

    let previousSize = pageSize * pageIndex;

    this.getNextData(previousSize, (pageIndex).toString(), pageSize.toString());
  }
}

