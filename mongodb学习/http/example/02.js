
let http = require('http');
let fs = require('fs');

// 1、 创建一个服务器
let server = http.createServer((req, res) => {

    if (req.url === '/01test.html') {
        fs.readFile('./01test.html', (err, data) => {
            if (!err) {
                res.writeHead(200, { 'Content-Type': 'text/html;charset= UTF-8' });
                res.end(data);
            }
        })
    } else if (req.url === '/02test.html') {
        res.end('02');
    } else if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html;charset= UTF-8' });
        res.end('hello world')
    } else if (req.url === '/css/index.css') {
        fs.readFile('./css/index.css', (err, data) => {

            if (!err) {
                res.writeHead(200, { 'Content-Type': 'text/css' });
                res.end(data);
            }
        })
    } else if (req.url === '/image/zipai.jpg') {
        fs.readFile('./image/zipai.jpg', (err, data) => {
            
            if (!err) {
                res.writeHead(200, { 'Content-Type': 'image/jpg' });
                res.end(data);
            }
        })
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html;charset= UTF-8' });
        res.end('访问的页面不存在')
    }
    console.log(req.url);
});

// 2、 监听
server.listen(80, '127.0.0.1');