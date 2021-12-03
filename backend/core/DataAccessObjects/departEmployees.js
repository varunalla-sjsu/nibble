
class depart_employyes{
    depart_emp;
    constructor(db){
        this.depart_emp=db.models['dept_emp'];
    }
    getDepartments(skip,limit){
        console.log(this.depart_emp);
        return this.depart_emp.findAll({offset:skip,limit:limit});
    }
    getDepartmentsWithCriterion(query,skip,limit){
        
        console.log(this.depart_emp);
        return this.depart_emp.findAll({where: query });
    }
    getDepartmentsAndCount(skip,limit){
        
        return this.depart_emp.findAndCountAll({offset:skip,limit:limit,order: [
            ['dept_no', 'ASC']
        ]});
    }

     // need to modify
     updateEmpDepartment(empno, dep)
     {
        //  console.log("Update Reached, See database details.."+ query.employee_no);
         return this.depart_emp.update({ dept_no: dep , from_date : ((new Date().getFullYear().toString())+ '-'+(new Date().getMonth()+1).toString()) +'-' + ( new Date().getDate().toString())},
         { where: { emp_no: empno } });
     }

}
module.exports=depart_employyes;