const router=require('express').Router();
const usersRouter=require('./userController');
const homeRouter=require('./homeController');
const twitterHelperRouter = require('./twitterhelperController');  // added by aakanksha: For calling twiiter api's
router.use('/home',homeRouter);
router.use('/user',usersRouter);
router.use('/twitter', twitterHelperRouter);
module.exports=router;