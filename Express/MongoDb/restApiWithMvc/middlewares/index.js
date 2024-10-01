const fs = require("fs");

function logReqRes(filename) {
    return (req, res, next) => {
        fs.appendFile(filename, `\n${Date.now()} : ${req.method}`, (err) => {
            if (err) {
                console.error('Failed to log request:', err);
            }
            next(); // Make sure to call next()
        });
    };
}

module.exports = { logReqRes };
