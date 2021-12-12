const db=require('../models/index');
const router=require('express').Router();
const userDataAccess=new (require('./../DataAccessObjects/employee'))(db);
const ensureRole=require('./../auth/authMiddleware').ensureRole;
router.get('/',ensureRole(['admin', 'manager']),async (req,res)=>{
    //skip
    //limit
    
    let skip=parseInt(req.query.skip) || 0;
    let limit=parseInt(req.query.limit) || 20;
    console.log(req.query.empno);
    let emp_no = parseInt(req.query.empno) 
    if (emp_no)
    {
        let query = {
            emp_no : emp_no
        }
        console.log(query);
        try{
            let rows =await userDataAccess.getEmployeesWithCriterion(query);
            console.log(rows);
            return res.send(rows);
        }
        catch(err){  
            console.log(err);
        }
    }
    else 
    {
        try{
            let {count, rows:employees}=await userDataAccess.getEmployeesAndCount(skip,limit);
            return res.send({count:count,rows:employees});   
        }
        catch(err){
            console.log(err);
        }
    }
  
    return res.send([]);
});
module.exports=router;