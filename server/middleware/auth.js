const jwt = require('jsonwebtoken')
require('dotenv').config();

module.exports = function(req, res, next) {
    const authToken = req.header("Authorization");

    if (!authToken) {
        return res.status(401).send('User not authorized!')
    }

    const userDetails = jwt.verify(authToken, process.env.JWT_SECRET_AUTH_TOKEN);
    req.user = userDetails;
    next();
}
