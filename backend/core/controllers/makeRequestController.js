const db=require('../models/index');
const router=require('express').Router();
const requestDAO=new (require('./../DataAccessObjects/request'))(db);
const ensureRole=require('../auth/authMiddleware').ensureRole;

router.post('/',ensureRole(['manager']),async (req,res)=>{
    console.log(req.body)
    try{
        await requestDAO.putRequest(req.body.req_id, req.body.manager_id, req.body.req_dept,
             req.body.req_type, req.body.req_job, req.body.req_emp);
    }catch(err){            
        console.log(err)
    }return res.send([]);

});
module.exports=router;