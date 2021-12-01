
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
    getDepartmentsAndCount(skip,limit){
        console.log(this.db);
        return this.departments.findAndCountAll({offset:skip,limit:limit,order: [
            ['dept_no', 'ASC']
        ]});
    }
}
module.exports=department;