const jwt = require("jsonwebtoken");

/**
 * Middleware function. Should be added to routes that must be protected or private.
 * @param {Express.} req 
 * @param {*} res 
 * @param {*} next 
 * @returns Returns unauthorized 401 with the "Invalid Token" message, if the token does not exist.
 */
module.exports = function (req, res, next){
    const tokenWithBearer = req.header("Authorization");

    if(!tokenWithBearer) return res.status(401).send("Access Denied");

    const bearer = tokenWithBearer.split(' ');
    if(bearer[0] !== "Bearer") res.status(400).send("Invalid Token");
    const token = bearer[1];

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).send("Invalid Token");
    }
}