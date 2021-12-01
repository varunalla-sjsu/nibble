const db=require('../models/index');
const router=require('express').Router();
const departmentDataAccess=new (require('./../DataAccessObjects/department'))(db);
router.get('/',async (req,res)=>{
    //skip
    //limit
    let skip=parseInt(req.query.skip) || 0;
    let limit=parseInt(req.query.limit) || 20;
    try{
        let {count, rows:departments}=await departmentDataAccess.getDepartmentsAndCount(skip,limit);
        return res.send({count:count,rows:departments});
    }
    catch(err){
        console.log(err);
    }
    return res.send([]);
});
module.exports=router;