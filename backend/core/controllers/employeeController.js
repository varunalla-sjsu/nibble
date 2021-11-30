const db=require('../models/index');
const router=require('express').Router();
const userDataAccess=new (require('./../DataAccessObjects/employee'))(db);
router.get('/',async (req,res)=>{
    //skip
    //limit
    let skip=req.query.skip || 0;
    let limit=req.query.limit || 20;
    try{
        let employees=await userDataAccess.getEmployees(skip,limit);
        return res.send(employees);
    }
    catch(err){
        console.log(err);
    }
    return res.send([]);
});
module.exports=router;