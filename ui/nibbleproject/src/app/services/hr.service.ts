import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HrService {

  constructor(private http: HttpClient) { }


  async getRequests(params: string){
    // call to get our APIs to get our allocation and deallocation requests
    debugger;
      // return this.http.get('http://localhost:3000/api/requests?' + params.toString());

      this.http.get('http://localhost:3000/api/requests?'+ params.toString(), {}).subscribe(function (res : any) {
      console.log("back to frontend service" + res);
      return res;
      
    });

   
    // let res = [
    //   { employee: "chris", raisedby: 'John', type:"allocation", departmentid: 'IT' },
    //   { employee: "Josh", raisedby: 'Casey', type:"deallocation", departmentid: 'IT' },
    //   { employee: "Cody", raisedby: 'John', type:"allocation", departmentid: 'Consulting' },
    //   { employee: "XqRwT", raisedby: 'TSikR', type:"deallocation", departmentid: 'Research' },
    //   { employee: "XqRwT", raisedby: 'TSikR', type:"deallocation", departmentid: 'Research' },
    //   { employee: "XqRwT", raisedby: 'TSikR', type:"deallocation", departmentid: 'Research' },
    //   { employee: "XqRwT", raisedby: 'TSikR', type:"deallocation", departmentid: 'Research' }
    // ]
    //   return res;
  }

  async getDepartmentsInfo(){
    // call to APIs to get no. of employees in each department


    // return this.http.get('http://localhost:3000/api/requests')

    let res = [
      { department: "Customer Service", employees: '1213' },
      { department: "Development", employees: '84226' },
      { department: "Finance", employees: '9769' },
      { department: "Marketing", employees: '5685' },
      { department: "Human Resources", employees: '344' },
      { department: "Production", employees: '23423' },
      { department: "Quality Management", employees: '43244' },
      { department: "Research", employees: '2344' },
      { department: "Sales", employees: '24532' },
      
      ];
  
    return res;
  }


}