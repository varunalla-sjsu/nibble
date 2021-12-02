const db=require('../models/index');
const router=require('express').Router();
const userDataAccess=new (require('./../DataAccessObjects/ratings'))(db);
router.get('/',async (req,res)=>{
    console.log(req.query);
    
    return res.send([]);
});

router.post('/updateHike',async (req,res)=>{
    console.log(req.body);
    try{
        await userDataAccess.updateRating(req.body);
        // return res.send({count:count,rows:employees});
    }
    catch(err){
        console.log(err);
    }
    return res.send([]);
});
module.exports=router;