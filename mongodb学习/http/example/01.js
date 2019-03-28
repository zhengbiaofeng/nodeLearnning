
let http = require('http');

// 1、 创建一个服务器
let server = http.createServer((req, res) => {
    // 在node里面，没有像其他后端语言一样的容器，他的页面切换，是通过url来操作的。叫做顶层路由设计，nodejs擅长顶层路由设计，url与物理文件并不是一一对应的。
    console.log(req.url);
    res.writeHead(200, { 'Content-Type': 'text/html;charset= UTF-8' });
    res.write('<h1>哈哈哈</h1>');
    res.end('hello')
});

server.listen(80, '127.0.0.1');
