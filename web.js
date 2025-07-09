const http = require('http');
const fs = require('fs');

http.createServer((req, resp) => {
    fs.readFile('web.html', (err, data) => {
        if (err) {
            resp.writeHead(500, { 'Content-Type': 'text/plain' });
            resp.end('Error loading web.html');
            return;
        }
        resp.writeHead(200, { 'Content-Type': 'text/html' });
        resp.end(data);
    });

}).listen(5600)