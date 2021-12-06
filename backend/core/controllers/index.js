const router=require('express').Router();
const usersRouter=require('./userController');
const homeRouter=require('./homeController');
const employeeRouter=require('./employeeController');
const departmentRouter=require('./departmentController');
const twitterHelperRouter = require('./twitterhelperController');  // added by aakanksha: For calling twiiter api's
const hrRouter=require('./hrController');
const allocationRouter = require('./allocationController');
const departEmpRouter = require('./departEmpController');

const ratingRouter = require('./ratingsControllers'); // added by aakanksha : for getting rating records from tabl
const makeRequestRouter=require('./makeRequestController'); 
const titleRouter = require('./titleController');

router.use('/home',homeRouter);
router.use('/user',usersRouter);
router.use('/employee',employeeRouter);
router.use('/department',departmentRouter);
router.use('/twitter', twitterHelperRouter);
router.use('/requests', hrRouter);
router.use('/allocation', allocationRouter);
router.use('/departemp',departEmpRouter);
router.use('/ratings', ratingRouter);
router.use('/request',makeRequestRouter);
router.use('/title', titleRouter);
module.exports=router;