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
        monkey = env.MONKEY + '\n',
        elephant = env.ELEPHANT + '\n',
        lion = env.LION + '\n',
        response = [message, version, monkey, elephant, lion].join('\n');
    res.end(response);
});
server.listen();
