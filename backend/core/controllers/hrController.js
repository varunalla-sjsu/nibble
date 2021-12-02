const db=require('../models/index');
const router=require('express').Router();
const hrDataAccess=new (require('../DataAccessObjects/request'))(db);
router.get('/',async (req,res)=>{
    //skip
    //limit
    let skip=parseInt(req.query.skip) || 0;
    let limit=parseInt(req.query.limit) || 20;
    try{
        let requests=await hrDataAccess.getRequests(skip,limit);
        return res.send(requests);
    }
    catch(err){
        console.log(err);
    }
    return res.send([]);
});
module.exports=router;