let http = require('http'),
    url = require('url'),
    fs = require('fs'),
    path = require('path');

http.createServer((req, res) => {
    // 获取url地址
    let pathUrl = url.parse(req.url);
    let pathName = pathUrl.pathname;

    // 处理路径
    if (pathName.lastIndexOf('.') === -1) {
        pathName += '/index.html';
    }
    // 拼接路径
    let fileUrl = './' + path.normalize('./uploads/' + pathName);
    let extname = path.extname(fileUrl);
    console.log(fileUrl);
    // 读取文件
    fs.readFile(fileUrl, (err, data) => {
        if (!err) {
            //
            getContentType(extname, (contentType) => {
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(data)

            })
        } else {
            res.writeHead(404, { 'Content-Type': 'text/html;charset=UTF-8' });
            res.end('<h1>404,当前页面不存在</h1>')
        }
    })
}).listen(80, '127.0.0.1');

function getContentType(extName, callBack) {
    fs.readFile('./mime.json', (err, data) => {
        if (err) {
            throw err;
            return;
        } else {
            let mimeJson = JSON.parse(data);
            let contentType = mimeJson[extName] || 'text/plain';
            console.log(contentType);
            callBack(contentType);
        }
    })
}