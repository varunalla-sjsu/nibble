import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AllocationService {

  constructor(private http: HttpClient) {

  }

  async approveRequest(id:number,approval:string){
    // call to get our APIs to approve our allocation and deallocation requests
    console.log("inside getRequests");
    let body = {
      id: id,
      approval: approval
    };
    // this.http.post()
  
    return this.http.post('http://localhost:3000/api/allocation', body , {}).subscribe(function (res: any) {
      
    }) 

    // let res;
    // return res;
  }

  // updateRatingsForEmployees(hike: Number) {
  //   let body = {
  //     rating: hike,
  //     employee_no: 100000
  //   };
  //   this.http.post('http://localhost:3000/api/ratings/updateHike', body, {}).subscribe(function (res: any) {
  //     console.log("back to frontend service" + res);
  //   })
  // }



}