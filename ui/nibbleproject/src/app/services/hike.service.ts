import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HikeService {

  constructor(private http: HttpClient) { }

  getTwitterService() {
var that = this;
    this.http.get('http://localhost:3000/api/twitter', {}).subscribe(function (res : any) {
      console.log("back to frontend service" + res);
      window.location.href = res.message;
      that.http.get('http://localhost:3000/api/twitter/5', {}).subscribe(function (res : any) {
        console.log("back to frontend service" + res);
        window.location.href = res.message;
         
      });
    });
  }

}
