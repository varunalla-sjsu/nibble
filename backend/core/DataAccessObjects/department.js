let sequelize=require('sequelize');
const {getDate}=require('./../helpers/dateHelper');
class department{
    departments;
    connection;
    constructor(db){
        this.connection=db.connection;
        this.departments=db.models['departments'];
    }
    getDepartments(skip,limit){
        return this.departments.findAll({offset:skip,limit:limit});
    }
    getDepartmentsWithCriterion(query,skip,limit){
        return this.departments.findAll({where:query,offset:skip,limit:limit});
    }
    getDepartmentsAndCount(skip,limit){
        return this.departments.findAndCountAll({offset:skip,limit:limit,order: [
            ['dept_no', 'ASC']
        ]});
    }
    createDepartment(dept_name,dept_no){
       return this.departments.create({ dept_name: dept_name,dept_no:dept_no });
    }
    fetchDepartmentEmpCount(){
       return this.connection.query("select dept_emps.dept_no,departments.dept_name,COUNT(*) as employeecount from departments  LEFT JOIN dept_emps  on dept_emps.dept_no=departments.dept_no where dept_emps.from_date<=$date and dept_emps.to_date>=$date GROUP BY dept_emps.dept_no,departments.dept_name ",{bind:{date:getDate(new Date())},type:sequelize.QueryTypes.SELECT});
    }
}
module.exports=department;