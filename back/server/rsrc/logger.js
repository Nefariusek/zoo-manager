const { isEmpty } = require('./lib');
module.exports = function(req, res, next) {
    console.log(`[${req.method}]: ${req.url}`);
    if (req.body && !isEmpty(req.body)) {
        console.log('BODY: {' );
        for(let k in req.body){
            console.log("\t",k,': "',req.body[k],'"');
        }
        console.log("\t}\n")
    }
    next();
};
