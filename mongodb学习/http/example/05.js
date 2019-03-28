let http = require('http');
let url = require('url');
let querystring = require('querystring');
let formidable = require('formidable');
let util = require('util');
let uuidv1 = require('uuid/v1');
let path = require('path');
let fs = require('fs');

http.createServer((req, res) => {

    if (req.url === '/postmsg' && req.method.toLowerCase() === 'post') {

        // 1、 实例化对象
        var form = new formidable.IncomingForm();
        form.encoding = 'utf-8';
        // 2、 设置上传文件路径
        form.uploadDir = './uploads';
        // 3、 获取表达内容
        form.parse(req, function (err, fields, files) {
            if (!err) {
                // 3.1  生成随机的名称
                let name = uuidv1();
                console.log(console.log(fields, files));
                // 3.2  截取文件类型
                let extName = path.extname(files.photo.name);
                // 3.3  获取老的路径
                let oldPath = __dirname + '/' + files.photo.path;
                let newPath = __dirname + '/uploads/' + name + extName;
                // 3.4 改名
                fs.rename(oldPath, newPath, (err) => {
                    if (!err) {
                        res.writeHead(200, { 'content-type': 'text/html;charset=UTF-8' });
                        res.write('写入成功');
                        res.end(util.inspect({ fields: fields, files: files }));
                    } else {
                        throw err;
                    }
                })
            }

        });
    }
}).listen(80, '127.0.0.1');