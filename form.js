const http = require('http');
const fs = require('fs');
const queryString = require('querystring');

http.createServer((req, resp) => {

    //Submitting form data
    if (req.method === 'POST') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        }
        ).on('end', () => {
            console.log('Form Data:', body);
            resp.writeHead(200, { 'Content-Type': 'text/plain' });
            let dataBody=[];
            req.on('data',(chunk) => {
                dataBody.push(chunk);
            });
            req.on('end', ()=>{
                let rawData = Buffer.concat(dataBody).toString();
                let readableData = queryString.parse(rawData);
                console.log(readableData);
                let dataString = "My name is " + readableData.name + " and my password is " + readableData.password;
                console.log(dataString);
                fs.writeFileSync("text/"+readableData.name+".txt", dataString);
                console.log("Login successfully");
            })
            resp.end('Form submitted successfully');
        });
    }
    else if (req.method === 'GET') {
        resp.writeHead(200, { 'Content-Type': 'text/html' });
        resp.end(`
            <html>
                <body>
                    <form method="POST" action="/">
                        <input type="text" name="username" placeholder="Username" required>
                        <input type="password" name="password" placeholder="Password" required>
                        <button type="submit">Submit</button>
                    </form>
                </body>
            </html>
        `);
    } else {
        resp.writeHead(405, { 'Content-Type': 'text/plain' });
        resp.end('Method Not Allowed');
    }
    
}).listen(5000);