const jwt = require('jsonwebtoken')
require('dotenv').config();
const { isBlacklisted } = require('../utils/blacklist');

module.exports = function(req, res, next) {
    // Get auth token from request header
    const authToken = req.header("Authorization");

    if (!authToken) {
        return res.status(401).send('User not authorized!')
    }

    if (isBlacklisted(authToken)) {
        return res.status(403).send('Invalid token');
    }

    // Verify the token and extract user details
    const userDetails = jwt.verify(authToken, process.env.JWT_SECRET_AUTH_TOKEN);
    req.user = userDetails;
    next();
}
