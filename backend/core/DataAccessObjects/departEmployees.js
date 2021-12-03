
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
        return this.depart_emp.findAll({where: query,offset:skip,limit:limit });
    }
    getDepartmentsAndCount(skip,limit){
        
        return this.depart_emp.findAndCountAll({offset:skip,limit:limit,order: [
            ['dept_no', 'ASC']
        ]});
    }
}
module.exports=depart_employyes;