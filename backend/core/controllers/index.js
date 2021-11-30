const router=require('express').Router();
const usersRouter=require('./userController');
const homeRouter=require('./homeController');
const employeeRouter=require('./employeeController');
router.use('/home',homeRouter);
router.use('/user',usersRouter);
router.use('/employee',employeeRouter);
module.exports=router;