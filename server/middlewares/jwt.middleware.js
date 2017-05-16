var jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    
    var token = req.body.token || req.query.token || req.header['x-access-token'] || req.get("Authorization").split(" ")[1];
    if (token) {
        jwt.verify(token, global.config.jwtSecret, function(err, decoded){
            if(err){
                return res.json({"error": true});
            }
            req.decoded = decoded;
            next();
        });
    } else {
        return res.status(401).send({
            "error":true
        });
    }
}