class ratings{
    ratings;
    constructor(db){
        this.ratings=db.models['ratings'];
    }
    
    getEmployeesWithUnderManager(query,skip,limit){
        return this.ratings.findAll({where:query,offset:skip,limit:limit});
    }
    getEmployeesAndCount(skip,limit){
        console.log(this.ratings);
        return this.ratings.findAndCountAll({offset:skip,limit:limit});
    }
    updateRating(query)
    {
        console.log("Update Reached, See database details.."+ query.employee_no);
        return this.ratings.update({ rating: query.rating },
        { where: { emp_no: query.employee_no } });
    }
}
module.exports=ratings;