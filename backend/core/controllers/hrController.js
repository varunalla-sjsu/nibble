const db=require('../models/index');
const router=require('express').Router();
const hrDataAccess=new (require('../DataAccessObjects/request'))(db);
router.get('/',async (req,res)=>{
    //skip
    //limit
    // console.log("inside router"+req);
    // console.log(JSON.stringify(req));
    // debugger;
    // console.log(req.query);
    // console.log(req.query.skip);
    // console.log(req.query.limit);
    let skip=parseInt(req.query.skip) || 0;
    let limit=parseInt(req.query.limit) || 20;
    try{
        let {count, rows:requests}=await hrDataAccess.getRequestsAndCount(skip,limit);
        return res.send({count:count,rows:requests});
        // let requests=await hrDataAccess.getRequests(skip,limit);
        // debugger;
        // return requests ;
        // return res.send([{requests : requests}]);
        // return res.send(requests);
    }
    catch(err){
        console.log(err);
    }
    return res.send([]);
    // return res.send([{requests : requests}]);
});
module.exports=router;