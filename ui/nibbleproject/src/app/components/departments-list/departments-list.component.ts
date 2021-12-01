import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DepartmentsService } from 'src/app/services/departments.service';
interface Department {
  dept_no: number;
  dept_name: string;
}
@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.css']
})
export class DepartmentsListComponent implements OnInit {
  ELEMENT_DATA: Department[] = [];
  isLoading = false;
  totalRows = 0;
  pageSize = 10;
  currentPage = 0;
  pageSizeOptions: number[] = [10, 25, 100];

  displayedColumns: string[] = ['deptno', 'deptname'];
  dataSource: MatTableDataSource<Department> = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor(private departmentsService: DepartmentsService) { }


  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    //Load initial data
    this.loadData();
  }

  loadData() {
    this.isLoading = true;
    this.departmentsService.fetchDepartments(this.currentPage * this.pageSize, this.pageSize).subscribe((result: any) => {
      console.log(result);
      this.dataSource.data = result.rows;

  //    this.paginator.length= result.count;
      this.totalRows=result.count;
        this.paginator.pageIndex = this.currentPage;
      
      this.isLoading = false;
    },
      err => {
        console.log('Error Fetching Department Data');
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
