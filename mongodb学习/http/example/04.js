let http = require('http');
let url = require('url');
let querystring= require('querystring');
let formidable= require('formidable');
let util = require('util');


http.createServer((req, res) => {
    // url的parse方法将字符串变成了一个url对象，方便我们去操作url的每一个组成部分
    // let myUrl = url.parse(req.url,true);
    // let queryUrl = myUrl.query;
    // console.log(queryUrl);
    // res.end('hello world');
    if (req.url === '/postmsg' && req.method.toLowerCase() === 'post') {
        // let allData = '';
        // req.on('data', (buf) => {
        //     allData += buf;
        // });
        // req.once('end', () => {
         
        //     let dataObj = querystring.parse(allData);
        //     console.log(dataObj);
        // });
        // 1、 实例化对象
        var form = new formidable.IncomingForm();
        // 2、 设置上传文件路径
        form.uploadDir = '/uploads';
        // 3、 获取表达内容
        form.parse(req, function(err, fields, files) {
            res.writeHead(200, {'content-type': 'text/plain;charset=UTF-8'});
            res.write('received upload:\n\n');
            res.end(util.inspect({fields: fields, files: files}));
          });
    }
}).listen(80, '127.0.0.1');