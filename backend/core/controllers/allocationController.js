const db=require('../models/index');
const router=require('express').Router();
const requestAccess=new (require('../DataAccessObjects/request'))(db);
const userDataAccess=new (require('./../DataAccessObjects/employee'))(db);
const deptEmpDataAccess = new (require('./../DataAccessObjects/departEmployees'))(db);

router.post('/',async (req,res)=>{
    
    let req_id=req.body.id;
    let status=req.body.approval;

    console.log(req_id);
    console.log(status);

    try{
        
        if(status == 'approve'){
        let requestObject =  await requestAccess.getRequest(req_id);

        //    console.log("inside allocationController");
           console.log(requestObject.req_type);
        //    console.log("inside allocationController");
            if(requestObject.req_type == 'Allocation'){
                console.log("Allocation Request");
                // change the department of the employee in the dept_emp table
                await deptEmpDataAccess.updateEmpDepartment(requestObject.emp_no,requestObject.req_dept);

                // change the isDone to true in requests table
                await requestAccess.updateRequestStatus(requestObject.req_id);

            }else{
                console.log("Deallocation Request");
                //  change the department of the employee to d010 org pool
                let requestObject =  await requestAccess.getRequest(req_id);

                await deptEmpDataAccess.updateEmpDepartment(requestObject.emp_no,'d010');

                await requestAccess.updateRequestStatus(requestObject.req_id);

            }

        }else{
            // if status = 'reject'
            // delete the request from the table and send rejection mail to manager
            await requestAccess.updateRequestStatus(requestObject.req_id);
        }
        
        
        
        return res.send(res);;
        
    }
    catch(err){
        console.log(err);
    }
    return res.send([]);
    
});
module.exports=router;