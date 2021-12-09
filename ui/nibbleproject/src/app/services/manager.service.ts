
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http: HttpClient) { }

  submitRequest(data: any) {
    this.http.post<any>("/api/request/", data).subscribe(function(res:any){
      console.log("back to frontend service" + res);
      return res;
    });
  }
}

