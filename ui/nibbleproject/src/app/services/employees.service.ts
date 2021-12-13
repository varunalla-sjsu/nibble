import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }
  fetchUsers(skip:number,limit:number){
    return this.http.get('/api/employee?skip='+skip+'&limit='+limit);
  }
  fetchUser(employeeid:string){
    return this.http.get('/api/employee/'+employeeid);
  }
  addEmail(employeeid:string,email:string){
    return this.http.post('/api/employee/'+employeeid+'/addemail',{email:email});
  }
  updateRole(employeeid:string,email:string,role:string){
    return this.http.post('/api/employee/'+employeeid+'/updaterole',{role:role,email:email});
  }
  getProfile(){
    return this.http.get('/api/employee/currentuser');
  }
}
