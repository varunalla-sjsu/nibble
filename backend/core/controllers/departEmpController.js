const db=require('../models/index');
const router=require('express').Router();
const departmentDataAccess=new (require('./../DataAccessObjects/departEmployees'))(db);
router.get('/',async (req,res)=>{
    //skip
    //limit
    console.log("-----------------hello world!!---------------");
    console.log( req.query);
    let skip=parseInt(req.query.skip) || 0;
    let limit=parseInt(req.query.limit) || 20;
    let emp_no = parseInt(req.query.emp_no);
    console.log("Depart Employyes Page");
    try{
        if (emp_no)
        {
            let query = {
                "emp_no" : emp_no
            }
            console.log(query);
          let departments = await departmentDataAccess.getDepartmentsWithCriterion(query);
          console.log(departments);
      return res.send({rows:departments});
        }
        else
        {
            let {count, rows:departments}=await departmentDataAccess.getDepartmentsAndCount(skip,limit);
            return res.send({count:count,rows:departments});
        }
       
    }
    catch(err){
        console.log(err);
    }
    return res.send([]);
});
module.exports=router;