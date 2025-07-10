const http = require('http');
const userForm = require('./userForm');
const userDataSubmit = require('./userDataSubmit'); // This line is not used in the current code

http.createServer((req, resp) => {

    resp.writeHead(200, { 'Content-Type': 'text/html' });
    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); // Convert Buffer to string
        });
        req.on('end', () => {
            console.log("Received POST data:", body);
            resp.end("You can data from user here!");
        });
        return; // Exit after handling POST data
    }
    

    // resp.end("Helllo Aditya");
    userForm(req, resp);
    userDataSubmit(req, resp);

    // resp.end("Hello Aditya, this is a response from the server using userForm module.");

}).listen(3200)