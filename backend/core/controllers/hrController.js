const db=require('../models/index');
const router=require('express').Router();
const hrDataAccess=new (require('../DataAccessObjects/request'))(db);
const userDataAccess=new (require('./../DataAccessObjects/employee'))(db);
router.get('/',async (req,res)=>{
    
    let skip=parseInt(req.query.skip) || 0;
    let limit=parseInt(req.query.limit) || 20;
    try{
        let {count, rows:requests}=await hrDataAccess.getRequestsAndCount(skip,limit);

        console.log("checking");
        console.log(requests);

        return res.send({count:count,rows:requests});
        
    }
    catch(err){
        console.log(err);
    }
    return res.send([]);
    
});
module.exports=router;