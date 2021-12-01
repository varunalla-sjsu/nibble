import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
export interface EmployeeRating {
  name: string;
  position: number;
  prevrating: number;
  currrating: number;
  hike: number;

}

const ELEMENT_DATA: EmployeeRating[] = [
  { position: 1, name: 'Aakanksha', prevrating: 3, currrating: 4, hike: 0 },
  { position: 2, name: 'Hasini', prevrating: 4, currrating: 4, hike: 0 },
  { position: 3, name: 'Varun', prevrating: 5, currrating: 4, hike: 0 },
  { position: 4, name: 'Abhishek', prevrating: 4, currrating: 4, hike: 0 },
  { position: 5, name: 'xyz', prevrating: 4, currrating: 4, hike: 0 },
  { position: 6, name: 'xyz', prevrating: 4, currrating: 4, hike: 0 },
  { position: 7, name: 'xyz', prevrating: 4, currrating: 4, hike: 0 },
  { position: 8, name: 'xyz', prevrating: 4, currrating: 4, hike: 0 },
  { position: 9, name: 'xyz', prevrating: 4, currrating: 4, hike: 0 },
  { position: 10, name: 'xyz', prevrating: 4, currrating: 4, hike: 0 },
  { position: 11, name: 'xyz', prevrating: 4, currrating: 4, hike: 0 },
  { position: 12, name: 'xyz', prevrating: 4, currrating: 4, hike: 0 }



];

const legend: any[] = [
  { rating: 1, description: "Need Improvement" },
  { rating: 2, description: "Meet Expectations" },
  { rating: 3, description: "Good" },
  { rating: 4, description: "Very Good" },
  { rating: 5, description: "Outstanding" }

]
@Component({
  selector: 'app-employees-hike',
  templateUrl: './employees-hike.component.html',
  styleUrls: ['./employees-hike.component.css']
})
export class EmployeesHikeComponent  {
  displayedColumns: string[] = ['position', 'name', 'prevrating', 'currrating', 'hike'];
  FooterdisplayedColumns: string[] = ['position', 'hike'];
  LegendColumns: string[] = ['rating', 'description'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  legendData = new MatTableDataSource(legend);
  toggle = false;
constructor(private paginator : MatPaginator)
{
  // this.dataSource.paginator = this.paginator;
}
  
@ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
  this.paginator = mp;
  this.setDataSourceAttributes();
}
setDataSourceAttributes() {
  this.dataSource.paginator = this.paginator;
  // this.dataSource.sort = this.sort;

  // if (this.paginator && this.sort) {
    // this.applyFilter('');
  }

 
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  updateHike(element: any, hike: number) {
    this.toggle = !this.toggle;
    element.hike = hike;
    console.log("Reached hike endpoint");
    debugger;
  }

}
