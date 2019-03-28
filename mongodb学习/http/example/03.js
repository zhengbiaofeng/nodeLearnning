let http = require('http');
let url = require('url');

http.createServer((req, res) => {
   // url的parse方法将字符串变成了一个url对象，方便我们去操作url的每一个组成部分
    let myUrl = url.parse(req.url);
    console.log(myUrl);
    res.end('hello world');
}).listen(80, '127.0.0.1');