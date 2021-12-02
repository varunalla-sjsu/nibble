import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor(private http: HttpClient) { }
  fetchDepartments(skip:number,limit:number){
    return this.http.get('http://localhost:3000/api/department?skip='+skip+'&limit='+limit);
  }
}
