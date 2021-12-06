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

}
module.exports=request;