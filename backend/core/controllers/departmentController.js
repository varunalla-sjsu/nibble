const db=require('../models/index');
const router=require('express').Router();
const departmentDataAccess=new (require('./../DataAccessObjects/department'))(db);
const ensureRole=require('./../auth/authMiddleware').ensureRole;

router.get('/',ensureRole(['admin','hr']),async (req,res)=>{
    //skip
    //limit
    let skip=parseInt(req.query.skip) || 0;
    let limit=parseInt(req.query.limit) || 20;
    try{
        let {count, rows:departments}=await departmentDataAccess.getDepartmentsAndCount(skip,limit);
        return res.send({count:count,rows:departments});
    }
    catch(err){
        console.log(err);
    }
    return res.send([]);
});
router.get('/distribution',ensureRole(['admin']),async(req,res)=>{
    try{
        let result=await departmentDataAccess.fetchDepartmentEmpCount();
        return res.send({data:result});
    }
    catch(err){
        console.log('distribution ',err)
    }
    return res.send({status:'could not process request'});
});
router.post('/',ensureRole(['admin']),async(req,res)=>{
    let dept_name=req.body.dept_name;
    try{

        let {count}=await departmentDataAccess.getDepartmentsAndCount(0,10);
        console.log('current dept count : ',count);
        let data=''+(++count);
        console.log(data.padStart(3,'0'));
        let dept_no='d'+data.padStart(3,'0');
        let dept=await departmentDataAccess.createDepartment(dept_name,dept_no);
        return res.status(200).send({'status':'success', 'msg':dept})
    }
    catch(err){
        console.log(err);
        res.status(503).send({'status':'success', 'msg':'Could not create department'});
    }
});
module.exports=router;