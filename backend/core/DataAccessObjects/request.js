
class request{
    requests;
    constructor(db){
        this.requests=db.models['requests'];
    }
    getRequests(skip,limit){
        console.log(this.requests);
        return this.requests.findAll({offset:skip,limit:limit});
    }
    getrRequestsWithCriterion(query,skip,limit){
        return this.requests.findAll({where:query,offset:skip,limit:limit});
    }

}
module.exports=request;