import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor(private http: HttpClient) { }
  fetchDepartments(skip:number,limit:number){
    return this.http.get('/api/department?skip='+skip+'&limit='+limit);
  }
  createDepartments(deptname:string){
    return this.http.post('/api/department',{
      dept_name:deptname
    });
  }
  departmentsChart(){
    return this.http.get('/api/department/distribution');
  }
}
