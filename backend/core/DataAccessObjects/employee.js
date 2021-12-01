
class employee{
    employees;
    constructor(db){
        this.employees=db.models['employees'];
    }
    getEmployees(skip,limit){
        console.log(this.db);
        return this.employees.findAll({offset:skip,limit:limit});
    }
    getEmployeesWithCriterion(query,skip,limit){
        return this.employees.findAll({where:query,offset:skip,limit:limit});
    }
    getEmployeesAndCount(skip,limit){
        console.log(this.db);
        return this.employees.findAndCountAll({offset:skip,limit:limit});
    }
}
module.exports=employee;