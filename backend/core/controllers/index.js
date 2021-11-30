const router=require('express').Router();
const usersRouter=require('./userController');
const homeRouter=require('./homeController');
router.use('/home',homeRouter);
router.use('/user',usersRouter);
module.exports=router;