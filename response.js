const http = require('http');

http.createServer.listen( (req, resp) => {
    resp.writeHead(200, { 'Content-Type': 'text/html' });
    resp.write("<h1> This is a response from the server </h1> ");
    resp.end("Hello Aditya!");
}
).listen(4800);

console.log("Server is running on port 4800");
// To run this server use the command: node response.js
// to test the server open a new tab in the browser and type http://localhost:4800
// You can also use Postman to test the server by sending a Get request to the server
http.createServer((req, resp) => {
    resp.writeHead(200, { 'Content-Type': 'text/html' });
    resp.write("<h1> This is a response from the server 2 </h1> ");
    resp.end("Hello 2");
}
).listen(4801);

console.log("Server is running on port 4801");
// To run this server use the command: node response.js
// to test the server open a new tab in the browser and type http://localhost:4801
// You can also use Postman to test the server by sending a Get request to the server
