const http = require('http');

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