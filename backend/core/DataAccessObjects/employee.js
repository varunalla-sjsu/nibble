
let sequelize=require('sequelize');
class employee{
    employees;
    connection;
    constructor(db){
        this.employees=db.models['employees'];
        this.connection=db.connection;
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
    getEmployee(employeeid){
        return this.connection.query("select * from employees  LEFT JOIN users  on employees.emp_no=users.emp_no where employees.emp_no=$empno",{bind:{empno:parseInt(employeeid)},type:sequelize.QueryTypes.SELECT});
    }
}
module.exports=employee;