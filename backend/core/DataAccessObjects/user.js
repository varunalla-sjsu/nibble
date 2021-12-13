
let sequelize = require('sequelize');
class user {
    users;
    connection;
    constructor(db) {
        this.users = db.models['users'];
        this.connection = db.connection;
    }
    getUsers(skip, limit) {
        console.log(this.db);
        return this.users.findAll({ offset: skip, limit: limit });
    }
    getUsersWithCriterion(query, skip, limit) {
        return this.users.findAll({ where: query, offset: skip, limit: limit });
    }
    getUsersAndCount(skip, limit) {
        console.log(this.db);
        return this.users.findAndCountAll({ offset: skip, limit: limit });
    }
    findOrCreate(empno, email, userid) {
        return this.users.findOrCreate({
            where: { emp_no: empno },
            defaults: {
                role: 'employee',
                emp_no: empno,
                email: email,
                authid: userid
            }
        });
    }
    getUser(email) {
        return this.connection.query("select * from employees  LEFT JOIN users  on employees.emp_no=users.emp_no where users.email=$email", { bind: { email: email }, type: sequelize.QueryTypes.SELECT });
    }
}
module.exports = user;