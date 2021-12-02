const router=require('express').Router();
const usersRouter=require('./userController');
const homeRouter=require('./homeController');
const employeeRouter=require('./employeeController');
const departmentRouter=require('./departmentController');
const twitterHelperRouter = require('./twitterhelperController');  // added by aakanksha: For calling twiiter api's
router.use('/home',homeRouter);
router.use('/user',usersRouter);
router.use('/employee',employeeRouter);
router.use('/department',departmentRouter);
router.use('/twitter', twitterHelperRouter);

module.exports=router;