const jwt = require('jsonwebtoken')
require('dotenv').config();
const { isBlacklisted } = require('../utils/blacklist');

module.exports = function(req, res, next) {
    const authToken = req.header("Authorization");

    if (!authToken) {
        return res.status(401).send('User not authorized!')
    }

    if (isBlacklisted(authToken)) {
        return res.status(403).send('Invalid token');
    }

    const userDetails = jwt.verify(authToken, process.env.JWT_SECRET_AUTH_TOKEN);
    req.user = userDetails;
    next();
}
