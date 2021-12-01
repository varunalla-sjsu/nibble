const db=require('../models/index');
const router=require('express').Router();
const departmentDataAccess=new (require('./../DataAccessObjects/department'))(db);
router.get('/',async (req,res)=>{
    //skip
    //limit
    let skip=parseInt(req.query.skip) || 0;
    let limit=parseInt(req.query.limit) || 20;
    try{
        let departments=await departmentDataAccess.getDepartments(skip,limit);
        return res.send(departments);
    }
    catch(err){
        console.log(err);
    }
    return res.send([]);
});
module.exports=router;