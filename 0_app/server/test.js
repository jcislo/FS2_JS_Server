const http = require('http'); //required for basic functionality

const hostname = 'localhost'; //sets host name

const port = 3000; //using port 3000 but can be anything

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Greetings fine explorer');

});
try {
    server.listen(port, hostname, () => {
        console.log(`http://${hostname}:${port}/` + ' ok');
    });
} catch (err) {
    console.log(error);
}
