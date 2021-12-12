const db=require('../models/index');
const router=require('express').Router();
const userDataAccess=new (require('./../DataAccessObjects/employee'))(db);
const ensureRole=require('./../auth/authMiddleware').ensureRole;
router.get('/',ensureRole(['admin']),async (req,res)=>{
    //skip
    //limit
    let skip=parseInt(req.query.skip) || 0;
    let limit=parseInt(req.query.limit) || 20;
    try{
        let {count, rows:employees}=await userDataAccess.getEmployeesAndCount(skip,limit);
        return res.send({count:count,rows:employees});
    }
    catch(err){
        console.log(err);
    }
    return res.send([]);
});
router.get('/:employeeid',ensureRole(['admin']),async (req,res)=>{
    //skip
    //limit
   let employeeid=  req.params.employeeid;
    try{
        let employee=await userDataAccess.getEmployee(employeeid);
        if(employee.length==1){
            return res.send({employee:employee[0]});
        }
    }
    catch(err){
        console.log(err);
        return res.status(503).send({});
    }
    return res.status(404).send({});
});
module.exports=router;