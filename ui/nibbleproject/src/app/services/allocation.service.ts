import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllocationService {

  constructor() {

  }

  async approveRequest(username:string,approval:string){
    // call to get our APIs to approve our allocation and deallocation requests
    let res;
    return res;
  }

  async rejectRequest(username:string,approval:string){
    // call to get our APIs to approve our allocation and deallocation requests
    let res;
    return res;
  }



}