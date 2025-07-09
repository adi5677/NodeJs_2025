const http = require('http');

const userData = [
    {
        name: 'Aditya Sharma',
        age: 24,
        email:'aditya.sharma@example.com'
    },

    {
        name: 'Priya Singh',
        age: 22,
        email:'priya.singh@example.com'
    },
    {
        name: 'Rahul Verma',
        age: 26,
        email:'rahul.verma@example.com'
    }

]

http.createServer((req, resp)=>{
    resp.setHeader('Content-Type', 'application/json');
    resp.write(JSON.stringify(userData));
    resp.end();
}).listen(8100)