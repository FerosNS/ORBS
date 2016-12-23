const fs = require('fs'),
   setup = require('./bin/setup')
   build = require('./build/');

var options = {
    APP : 'default',
    INFO : 'default'
};

const config = setup.check_config( (data) => {
    options = data === 'default' ? options : options = JSON.parse(data);
    switch(options.APP) {
        case 'dev':
            console.log("Starting Development Environment");
            build(options);
            break;
        case 'default':
            console.log("Starting Default Environment");
            build(options);
            break;
        default:
            console.log("Unexpected Error has occured.");
            options.error = "Unexpected application state";
            options.code = "999";
            build(options);
            break;
    }
});
