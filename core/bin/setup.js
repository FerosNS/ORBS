const fs = require('fs'),
    path = require('path');

function check_config (callback) {
    fs.readFile(path.join(__dirname, '../../config.orbs'), (err, data) => {
        if (err) {
            if (err.code === "ENOENT") {
                console.error('Create a config.orbs file to setup core environment. Using default environment.');
                callback("default");
                return false;
            } else {
                throw err;
            }
        }
        callback(data);
    });
}

module.exports = { check_config };
