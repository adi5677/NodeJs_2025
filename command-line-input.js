// This code demonstrates how to create a simple HTTP server in Node.js
// that responds with a message and listens on a port specified via command line arguments.
// File: command-line-input.js
// create Dynamic port server in Node.js
// This code takes a port number from the command line arguments and creates an HTTP server that listens

const http = require("http");
const arg = process.argv;
const port = arg[2];

http.createServer((req, resp) => {
    resp.write('Testing input from command line');
    resp.end()
}).listen(port);

// console.log("Aditya Sharma");
// console.log("------------", arg[2]);