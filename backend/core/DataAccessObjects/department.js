
class department{
    departments;
    constructor(db){
        this.departments=db.models['departments'];
    }
    getDepartments(skip,limit){
        console.log(this.departments);
        return this.departments.findAll({offset:skip,limit:limit});
    }
    getDepartmentsWithCriterion(query,skip,limit){
        return this.departments.findAll({where:query,offset:skip,limit:limit});
    }

}
module.exports=department;