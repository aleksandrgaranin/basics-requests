const http = require('http');

const server = http.createServer((request, response) => {
    let body = [];
    // console.log(request.method, request.url)
    request.on('data', (chunk) => {
        body.push(chunk);
    });
    request.on('end', () => {
        body = Buffer.concat(body).toString();
        if(body){
            userName = body.split('=')[1];
        } else {
            userName = "User"
        }
        console.log(body, userName);
        response.setHeader('Content-Type', 'text/html');
        response.write(`<h1>hi ${userName}</h1><form method="POST" action="/"><input name="username" type="text"><button type="submit">Submit</button></form>`);
        response.end()

    })

});

server.listen(3000);