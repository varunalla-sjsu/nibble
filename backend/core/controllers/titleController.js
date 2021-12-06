const db=require('../models/index');
const router=require('express').Router();
const userDataAccess=new (require('./../DataAccessObjects/title'))(db);
router.get('/',async (req,res)=>{
    console.log(req.query);
    
    return res.send([]);
});
router.get('/checkRole',async (req,res)=>{
    console.log("checkRole router method" + req.query);
    try{
        let isManager = await userDataAccess.isManager(req.query.email);
        if (isManager) 
        {
            return res.send([{"isManagerResp" : isManager}]);
        }
        else 
        {
            return res.send({"message" : "Not a Manager"});
        }
    }
    catch(err){
        console.log(err);
    }
    return res.send([]);
    
    return res.send([]);
});

module.exports=router;