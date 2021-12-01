import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

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

];

const legend: any[] = [
{rating : 1, description : "Need Improvement"}, 
{rating : 2, description : "Meet Expectations"}, 
{rating : 3, description : "Good"}, 
{rating : 4, description : "Very Good"}, 
{rating : 5, description : "Outstanding"}

]
@Component({
  selector: 'app-employees-hike',
  templateUrl: './employees-hike.component.html',
  styleUrls: ['./employees-hike.component.css']
})
export class EmployeesHikeComponent {
  displayedColumns: string[] = ['position', 'name', 'prevrating', 'currrating', 'hike'];
  FooterdisplayedColumns: string[] = ['position', 'hike'];
  LegendColumns: string[]= ['rating', 'description'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  legendData = new MatTableDataSource(legend);
  toggle = false;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  updateHike(element: any, hike : number)
  {
    this.toggle = !this.toggle;
   element.hike = hike;
console.log("Reached hike endpoint");
debugger;
  }

}
