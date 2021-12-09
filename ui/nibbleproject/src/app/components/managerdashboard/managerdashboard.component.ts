import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-managerdashboard',
  templateUrl: './managerdashboard.component.html',
  styleUrls: ['./managerdashboard.component.css']
})
export class ManagerdashboardComponent implements OnInit {

  req_id : string = '';
  manager_id : string = '';
  req_type : string = '';
  req_dept : string = '';
  req_job_title : string = '';
  req_emp : string = '';

  constructor(private managerService: ManagerService ) { }

  ngOnInit(): void {
   
  }

   async submitform(){
    
    
    console.log(this.req_id);
    console.log(this.manager_id);
    console.log(this.req_type);
    console.log(this.req_dept);
    console.log(this.req_job_title);
    console.log(this.req_emp);
  
     var data= 
      {
        req_id: this.req_id,
        manager_id : this.manager_id,
        req_type : this.req_type,
        req_dept: this.req_dept,
        req_job: this.req_job_title,
        req_emp: this.req_emp
      }
    ;
  let resp = await this.managerService.submitRequest(data);
  console.log(resp)
   }
  }

