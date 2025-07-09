const http = require('http');

http.createServer((req, resp) => {
    
    console.log(req.method);
    if(req.url =="/"){
        resp.write("<h1>Hello Aditya</h1>");
    } else if(req.url=="/login") {
        resp.write("<h1>Login Page</h1")
    } else if(req.url=="/other") {
        resp.write("<h1>Other Page</h1>");
    }
    resp.end();

}).listen(5600)