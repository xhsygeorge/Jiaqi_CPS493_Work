const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!!');
});

// call back function
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    console.log('Server still running at http://' + hostname + ':' + port +'/');
});



/**
const nnn = function(parnmName){
}
const obj = {
    vvv(){
    }
}
const fatArrow = x => x * 2;
*/