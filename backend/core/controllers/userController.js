const router=require('express').Router();
router.get('/',(req,res)=>{
   let user={
      email:req.oidc.user.email,
      nickname:req.oidc.user.nickname,
      picture:req.oidc.user.picture,
      name:req.oidc.user.name,
      roles:req.oidc.user['http://nibbleproj.com/roles']

   };
   return res.send(user);
});
module.exports=router;