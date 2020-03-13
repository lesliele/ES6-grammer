const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': ['Content-Type'],
        'Access-Control-Allow-Methods': 'PUT'
        // 'Content-Type': 'application/json'
    });
    // 定义了一个post变量，用于暂存请求体的信息
    let post = '';

    // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
    req.on('data', function (chunk) {
        post += chunk;
    });

    req.on('end', function () {
        console.log(post)
    });

    res.end('123')
}).listen(3336);

console.log('The server listening')