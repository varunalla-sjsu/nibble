const { auth } = require('express-openid-connect');
const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.secret,
    baseURL: 'http://localhost:3000',
    clientID: process.env.clientId,
    issuerBaseURL: process.env.issuerBaseURL
};
function ensureAuthentiated(req, res, next) {
    if (req.oidc.isAuthenticated()) {
        next();
    }
    else {
        res.redirect('/login');
    }
}
function ensureRole(allowedRoles) {
    function checkRole(allowed, current) {
        let roles = {};
        for (let i = 0; i < current.length; i++) {
            roles[current[i]] = true;
        }
        for (let i = 0; i < allowed.length; i++) {
            if (roles[allowed[i]]) {
                return true;
            }
        }
        return false;
    }
    return function (req, res, next) {
        if (checkRole(allowedRoles, req.oidc.user['http://nibbleproj.com/roles'])) {
            next();
        }
        else {
            res.status(401).send({ status: 'Unauthorized' });
        }
    }
}

module.exports = {
    "config": auth(config),
    "middlware": ensureAuthentiated,
    "ensureRole": ensureRole
};