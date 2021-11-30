const router=require('express').Router();
router.get('/',(req,res)=>{
   return res.send(JSON.stringify(req.oidc.user));
});
module.exports=router;