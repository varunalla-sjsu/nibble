class request{
    requests;
    constructor(db){
        this.requests=db.models['requests'];   
    }

    
   async getRequests(skip,limit){
       
    let res = await this.requests.findAll({offset:skip,limit:limit});
   
    return res;
        
    }

    getRequestsAndCount(skip,limit){
        // console.log(this.db);
        return this.requests.findAndCountAll({where: {is_done:false},offset:skip,limit:limit});
    }
    getrRequestsWithCriterion(query,skip,limit){
        return this.requests.findAll({where:query,offset:skip,limit:limit});
    }

    getRequest(id){
        console.log("inside data access object")
        return this.requests.findOne({where: {req_id:id}});
    }

    updateRequestStatus(reqid)
    {
       //  console.log("Update Reached, See database details.."+ query.employee_no);
        return this.requests.update({ is_done: true },
        { where: { req_id: reqid } });
    }

    deleteRequest(reqid)
    {
        console.log("inside delete");
       //  console.log("Update Reached, See database details.."+ query.employee_no);
        return this.requests.destroy({ where: { req_id: reqid } });
    }

    putRequest(reqid,manager_id,req_dept,req_type,req_job_title,emp_no)
    {   

        console.log("inside putRequest");
        var created_date=new Date()
        return this.requests.create({ req_id: reqid, req_madeby: manager_id,req_dept: req_dept,req_type:req_type,req_job_title:req_job_title,req_date:created_date,emp_no:emp_no,is_done:false});
    }

}
module.exports=request;