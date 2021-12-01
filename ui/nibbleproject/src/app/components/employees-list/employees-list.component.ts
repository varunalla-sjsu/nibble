import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeesService } from 'src/app/services/employees.service';
interface Employee {
  emp_no: number;
  first_name: string;
  last_name: string;
  birth_date: Date;
  hire_date: Date;
}
@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  ELEMENT_DATA: Employee[] = [];
  isLoading = false;
  totalRows = 0;
  pageSize = 10;
  currentPage = 0;
  pageSizeOptions: number[] = [10, 25, 100];

  displayedColumns: string[] = ['empno', 'firstname', 'lastname', 'birthdate', 'hiredate'];
  dataSource: MatTableDataSource<Employee> = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor(private employeeService: EmployeesService) { }
  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    //Load initial data
    this.loadData();
  }

  loadData() {
    this.isLoading = true;
    this.employeeService.fetchUsers(this.currentPage * this.pageSize, this.pageSize).subscribe((result: any) => {
      console.log(result);
      this.dataSource.data = result.rows;

  //    this.paginator.length= result.count;
      this.totalRows=result.count;
        this.paginator.pageIndex = this.currentPage;
      
      this.isLoading = false;
    },
      err => {
        console.log('Error Fetching Data');
        this.isLoading = false;
      });
  }

  pageChanged(event: PageEvent) {
    console.log({ event });
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.loadData();
  }
}
