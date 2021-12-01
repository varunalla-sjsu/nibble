import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }
  fetchUsers(skip:number,limit:number){
    return this.http.get('http://localhost:3000/api/employee?skip='+skip+'&limit='+limit);
  }
}