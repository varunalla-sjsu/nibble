import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HrService {

  constructor() { }


  async getRequests(){
    // call to get our APIs to get our allocation and deallocation requests
    let res = [
      { employee: "chris", raisedby: 'John', type:"allocation", departmentid: 'IT' },
      { employee: "Josh", raisedby: 'Casey', type:"deallocation", departmentid: 'IT' },
      { employee: "Cody", raisedby: 'John', type:"allocation", departmentid: 'Consulting' },
      { employee: "XqRwT", raisedby: 'TSikR', type:"deallocation", departmentid: 'Research' },
      { employee: "XqRwT", raisedby: 'TSikR', type:"deallocation", departmentid: 'Research' },
      { employee: "XqRwT", raisedby: 'TSikR', type:"deallocation", departmentid: 'Research' },
      { employee: "XqRwT", raisedby: 'TSikR', type:"deallocation", departmentid: 'Research' }
    ];
    return res;
  }


}
