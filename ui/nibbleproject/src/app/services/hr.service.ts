import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HrService {
result: any;
  constructor(private http: HttpClient) { }

    getRequests(skip:number,limit:number){
    // call to get our APIs to get our allocation and deallocation requests
    console.log("inside getRequests");
    return this.http.get('http://localhost:3000/api/requests?skip='+skip+'&limit='+limit)
      // return this.result;
      
  }

  async getDepartmentsInfo(){
    // call to APIs to get no. of employees in each department
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