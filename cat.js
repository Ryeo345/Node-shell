const fs = require('fs');
//asynchronous function
module.exports = (done, file) => {
    fs.readFile(file, (err, result) => {
        if (err) {
            done('could not read file');
        }
        else {
            done(result.toString());
        }
    });
}