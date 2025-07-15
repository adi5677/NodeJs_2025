const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(301, { Location: '/web.html' });
        return res.end();
    }
    
    fs.readFile('web.html', (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write("<h1>Error 404: File Not Found</h1>");
            return res.end();
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
    
    // res.write("page checked");
    // res.end();
}).listen(3000);

console.log("Server is running at http://localhost:3000");
// To test, open a browser and navigate to http://localhost:3000