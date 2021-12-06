
class employee{
    employees;
    constructor(db){
        this.employees=db.models['employees'];
    }
    getEmployees(skip,limit){
        console.log(this.db);
        return this.employees.findAll({offset:skip,limit:limit});
    }
    getEmployeesWithCriterion(query){
        return this.employees.findAll({where:query});
    }
    getEmployeesAndCount(skip,limit){
        console.log(this.db);
        return this.employees.findAndCountAll({offset:skip,limit:limit});
    }
}
module.exports=employee;