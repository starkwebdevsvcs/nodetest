const http = require('http');
const env = process.env;

// To read enviornmental variables
require('dotenv').config(); //dotenv

//For Timestamp messages in console
require('console-stamp')(console, 'HH:MM:ss');

const server = http.createServer(function(req, res) {
    console.log('Server started!!');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    let message = 'It works!!!\n',
        version = 'NodeJS ' + process.versions.node + '\n',
//        monkey = env.MONKEY + '\n',
//        elephant = env.ELEPHANT + '\n',
//        lion = env.LION + '\n',
        mongo1 = env.MONGODB_STRING + '\n',
        mongo2 = env.MONGODB_STRING2 + '\n',
        mongo3 = env.MONGODB_STRING3 + '\n',
//        response = [message, version, monkey, elephant, lion, mongo1].join('\n');
        response = [message, mongo1, mongo2, mongo3].join('\n');
    res.end(response);
});
server.listen();
