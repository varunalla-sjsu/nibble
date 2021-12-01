import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllocationService {

  constructor() {

  }

  async approveReuest(username:string,approval:string){
    // call to get our APIs to approve our allocation and deallocation requests
    let res;
    return res;
  }
}