const jwt = require('jsonwebtoken')

module.exports = function(req, res, next) {
    const authToken = req.header("user-auth-token");

    if (!authToken) {
        return res.status(401).send('User not authorized!')
    }

    const userDetails = jwt.verify(authToken, 'awognawole3280843halegn');
    req.user = userDetails;
    next();
}
