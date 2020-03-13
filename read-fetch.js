const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {

    const html = fs.readFileSync('9.fetch.html', 'utf-8');
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.end(html);

}).listen(3333);

console.log("start reading fetch.html...");