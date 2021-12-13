const db = require('../models/index');

const router = require('express').Router();
const userDataAccess = new (require('./../DataAccessObjects/employee'))(db);
const loginDataAccess = new (require('./../DataAccessObjects/user'))(db);
const ensureRole = require('./../auth/authMiddleware').ensureRole;
const authHelper = require('./../helpers/authHelper');
router.get('/', ensureRole(['admin']), async (req, res) => {
    //skip
    //limit
    let skip = parseInt(req.query.skip) || 0;
    let limit = parseInt(req.query.limit) || 20;
    try {
        let { count, rows: employees } = await userDataAccess.getEmployeesAndCount(skip, limit);
        return res.send({ count: count, rows: employees });
    }
    catch (err) {
        console.log(err);
    }
    return res.send([]);
});
router.get('/currentuser', async (req, res) => {
    try {
            let username=req.oidc.user.email;
           let response= await loginDataAccess.getUser(username);
           if(response.length==1)
             return res.status(200).send({ status: 'success', msg: 'Response', data:response[0] });
    }
    catch (err) {
        console.log(err);
    }
    return res.status(200).send({ status: 'failure', msg: 'Unable to process request!!!' });
});
router.get('/:employeeid', ensureRole(['admin']), async (req, res) => {
    //skip
    //limit
    let employeeid = req.params.employeeid;
    try {
        let employee = await userDataAccess.getEmployee(employeeid);
        if (employee.length == 1) {
            return res.send({ employee: employee[0] });
        }
    }
    catch (err) {
        console.log(err);
        return res.status(503).send({});
    }
    return res.status(404).send({});
});
router.post('/:employeeid/addemail', ensureRole(['admin']), async (req, res) => {
    try {
        let employeeid = req.params.employeeid;
        let email = req.body.email;
        let employee = await userDataAccess.getEmployee(employeeid);
        if (employee.length == 1 && (!employee[0].email)) {
            console.log(employee[0].first_name, ' ', employee[0].last_name);
            let token = await authHelper.getToken();
            console.log(token);
            let response = await authHelper.addUser({
                email: email,
                given_name: employee[0].first_name,
                family_name: employee[0].last_name,
                name: employee[0].first_name + ' ' + employee[0].last_name
            }, token);
            console.log(response);
            if (response.status == "success") {
                console.log(response);
                const [user, created] = await loginDataAccess.findOrCreate(parseInt(employeeid), email, response.userid);
                if (created) {
                    return res.status(200).send({ status: 'success', msg: 'Login added' });
                }
                else {
                    return res.status(200).send({ status: 'failure', msg: 'Login already exists!' });
                }
            }
            else {
                return res.status(200).send({ status: 'failure', msg: 'Unable to process request!!!' });
            }

        }
        else {
            return res.status(200).send({ status: 'failure', msg: 'Unable to process request!!!' });
        }
    }
    catch (err) {
        console.log(err);
        return res.status(503).send({});
    }
});
router.post('/:employeeid/updateRole', ensureRole(['admin']), async (req, res) => {
    try {
        let employeeid = req.params.employeeid;
        let role = req.body.role;
        let employee = await userDataAccess.getEmployee(employeeid);
        if (employee.length == 1 && (employee[0].email)) {
            console.log(employee[0].first_name, ' ', employee[0].last_name);
            let token = await authHelper.getToken();
            console.log(token);
            let response = await authHelper.getUserRoles(employee[0].authid, token);
            console.log(response);
            let delroles = [];
            if (response.roles.length > 0) {
                for (let lrole of response.roles) {
                    delroles.push(lrole.id);
                }
                response = await authHelper.removeRoles(employee[0].authid, delroles, token);
            }
            response = await authHelper.addRole(employee[0].authid, getRoleid(role), token);
            return res.status(200).send({ status: 'success', msg: 'Added Roles ' });
        }
    }
    catch (err) {
        console.log(err);
    }
    return res.status(200).send({ status: 'failure', msg: 'Unable to process request!!!' });
});

function getRoleid(role) {
    let result = process.env.employee_role_id;
    switch (role) {
        case 'hr': result = process.env.hr_role_id
            break;
        case 'manager':
            result = process.env.manager_role_id
            break;

    }
    return result;
}
module.exports = router;