import { createServer } from "http";

createServer((req, resp)=>{
    resp.write("<h1> This is a response from the server </h1> ");
    resp.end("Hello Aditya!");

}).listen(4800);

createServer((req, resp)=>{
    resp.write("<h1> This is a response from the server 2 </h1> ");
    resp.end("Hello 2");

}).listen(4801); 

console.log("Server is running on port 4800 and 4801");
// To run this server use the command: node server.js
// to test the server open a new tab in the browesr and type https://loaclhost:4800
// or https://localhost:4801
// You can also use Postman to test ther server by sending a Get request to the server

createServer((req, resp)=>{
    resp.write("<h1> This is a response from the server 3 </h1> ");
    resp.end("Hello 3");

}).listen(4802);

console.log("Server is running on port 4802");
// To run this server use the command: node server.js
// to test the server open a new tab in the browesr and type https://localhost:4802
// You can also use Postman to test ther server by sending a Get request to the server
createServer((req, resp)=>{
    resp.write("<h1> This is a response from the server 4 </h1> ");
    resp.end("Hello 4");

}).listen(4803);

console.log("Server is running on port 4803");
// To run this server use the command: node server.js
// to test the server open a new tab in the browesr and type https://localhost:4803
// You can also use Postman to test ther server by sending a Get request to the server
createServer((req, resp)=>{
    resp.write("<h1> This is a response from the server 5 </h1> ");
    resp.end("Hello 5");

}).listen(4804);