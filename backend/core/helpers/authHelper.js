var axios = require("axios").default;
let { v4: uuid } = require('uuid');
const options = {
    method: 'POST',
    url: process.env.issuerBaseURL + '/oauth/token',
    headers: { 'content-type': 'application/json' },
    data: {
        grant_type: 'client_credentials',
        client_id: process.env.clientId,
        client_secret: process.env.clientsecret,
        audience: process.env.issuerBaseURL + '/api/v2/'
    }
};

async function getToken() {
    try {
        let response = await axios.request(options);
        return response.data.access_token;
    }
    catch (err) {
        console.log(err);
    }
    return null;
}
async function addUser(user, token) {
    try {
        console.log(user);
        let options = {
            method: 'POST',
            url: process.env.issuerBaseURL + '/api/v2/' + 'users',
            headers: { 'content-type': 'application/json', authorization: 'Bearer ' + token },
            data: {
                email: user.email,
                given_name: user.given_name,
                family_name: user.family_name,
                name: user.given_name + ' ' + user.family_name,
                password: uuid(),
                connection: "Username-Password-Authentication"
            }
        };
        let axreq = await axios.request(options);
        if (axreq && axreq.data ) {
            let { status, error, message } = axreq;
            console.log(status, error, message);
            if (status == 200 || status ==201) {
                return { status: 'success', message: message,userid:axreq.data.user_id };
            }
            else if (status == 409 && error == 'Conflict') {
                return { status: 'success', message: message, userid:''};
            }
            else {
                return { status: 'failure', message: message };
            }
        }

    }
    catch (err) {
        console.log(err);
        if (err.response.status == 409 && err.response.statusText == 'Conflict') {
            return { status: 'success', message: err.response.message };
        }
    }
    return { status: 'failure', message: 'could not add user error' };
}
async function getUserRoles(authid,token){
   // https://login.auth0.com/api/v2/users-by-email?email=test%40gmail.com
    try{
        let options = {
            method: 'GET',
            url: process.env.issuerBaseURL + '/api/v2/' + 'users/'+authid+"/roles",
            headers: { 'content-type': 'application/json', authorization: 'Bearer ' + token }
        };
        let axreq = await axios.request(options);
        console.log(axreq);
        return { status: 'success', message: 'found user roles',roles:axreq.data };
    }
    catch(err){
        console.log(err);
    }
    return { status: 'failure', message: 'could not find user roles error' };
}
async function addRole(authid,roleid,token){
    try{
        
        let options = {
            method: 'POST',
            url: process.env.issuerBaseURL + '/api/v2/' + 'users/'+authid+"/roles",
            headers: { 'content-type': 'application/json', authorization: 'Bearer ' + token },
            data:{
                roles:[roleid]
            }
        };
        let axreq = await axios.request(options);
        console.log(axreq);
        return { status: 'success', message: 'added user roles' };
}
catch(err){
    console.log(err);
}
return { status: 'failure', message: 'could not add user roles error' };
}
async function removeRoles(authid,roles,token){
    try{
        
            let options = {
                method: 'DELETE',
                url: process.env.issuerBaseURL + '/api/v2/' + 'users/'+authid+"/roles",
                headers: { 'content-type': 'application/json', authorization: 'Bearer ' + token },
                data:{
                    roles:roles
                }
            };
            let axreq = await axios.request(options);
            console.log(axreq);
            return { status: 'success', message: 'deleted user roles' };
    }
    catch(err){
        console.log(err);
    }
    return { status: 'failure', message: 'could not delete user roles error' };
}
async function updateRole(){

}
module.exports = {
    getToken,
    addUser,
    getUserRoles,
    addRole,
    removeRoles
}