const router=require('express').Router();
router.get('/',(req,res)=>{
    return res.send("Welcome to CMPE-272 project :Team Nibble")
});
module.exports=router;