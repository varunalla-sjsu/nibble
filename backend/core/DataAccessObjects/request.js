class request{
    requests;
    constructor(db){
        this.requests=db.models['requests'];   
    }

    
   async getRequests(skip,limit){
        // console.log(skip);
        // console.log(limit);
        // console.log(this.requests);
    let res = await this.requests.findAll({offset:skip,limit:limit});
    // console.log(req);
    return res;
        
    }

    getRequestsAndCount(skip,limit){
        console.log(this.db);
        return this.requests.findAndCountAll({offset:skip,limit:limit});
    }
    getrRequestsWithCriterion(query,skip,limit){
        return this.requests.findAll({where:query,offset:skip,limit:limit});
    }

}
module.exports=request;